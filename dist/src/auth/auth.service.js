"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const flashcards_service_1 = require("../flashcards/flashcards.service");
const stats_service_1 = require("../stats/stats.service");
const crypto_1 = require("crypto");
const util_1 = require("util");
const jwt_1 = require("@nestjs/jwt");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = exports.AuthService = class AuthService {
    constructor(usersService, jwtService, flashcardsService, statsService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.flashcardsService = flashcardsService;
        this.statsService = statsService;
    }
    signup(email, password, username) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersService.find(email);
            if (users.length) {
                throw new common_1.BadRequestException('email in use');
            }
            const salt = (0, crypto_1.randomBytes)(8).toString('hex');
            const hash = (yield scrypt(password, salt, 32));
            const result = salt + '.' + hash.toString('hex');
            const user = yield this.usersService.create(email, result, username);
            return user;
        });
    }
    validateUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const [user] = yield this.usersService.find(email);
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const [salt, storedHash] = user.password.split('.');
            const hash = (yield scrypt(password, salt, 32));
            if (storedHash !== hash.toString('hex')) {
                throw new common_1.BadRequestException('Invalid password');
            }
            return user;
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = { email: user.email, sub: user.id };
            const rawUser = yield this.usersService.findOne(payload.sub);
            const currentUser = {
                id: rawUser.id,
                email: rawUser.email,
                username: rawUser.username,
            };
            return {
                currentUser,
                access_token: this.jwtService.sign(payload),
                flashcards: yield this.flashcardsService.findFlashcards(currentUser.id),
                stats: yield this.statsService.findStats(currentUser.id),
            };
        });
    }
    signin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const [user] = yield this.usersService.find(email);
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const [salt, storedHash] = user.password.split('.');
            const hash = (yield scrypt(password, salt, 32));
            if (storedHash !== hash.toString('hex')) {
                throw new common_1.BadRequestException('Invalid password');
            }
            return user;
        });
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        flashcards_service_1.FlashcardsService,
        stats_service_1.StatsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map