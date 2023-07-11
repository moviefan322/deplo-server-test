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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dtos/create-user.dto");
const update_user_dto_1 = require("./dtos/update-user.dto");
const signin_user_dto_1 = require("./dtos/signin-user.dto");
const user_dto_1 = require("./dtos/user.dto");
const users_service_1 = require("./users.service");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
const auth_service_1 = require("../auth/auth.service");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const user_entity_1 = require("./user.entity");
let UsersController = exports.UsersController = class UsersController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    getMe(user, session) {
        return __awaiter(this, void 0, void 0, function* () {
            return session.userId;
        });
    }
    signout(session) {
        return __awaiter(this, void 0, void 0, function* () {
            session.userId = null;
        });
    }
    createUser(body, session) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.signup(body.email, body.password, body.username);
            session.userId = user.id;
            return user;
        });
    }
    signIn(body, session) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.signin(body.email, body.password);
            session.userId = user.id;
            return user;
        });
    }
    findUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.findOne(parseInt(id));
            if (!user) {
                throw new common_1.NotFoundException('user not found');
            }
            return user;
        });
    }
    findAllUsers(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.usersService.find(email);
        });
    }
    removeUser(id) {
        return this.usersService.remove(parseInt(id));
    }
    updateUser(id, body) {
        return this.usersService.update(parseInt(id), body);
    }
};
__decorate([
    (0, common_1.Get)('/getme'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signout", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_user_dto_1.SigninUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUser", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeUser", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, serialize_interceptor_1.Serialize)(user_dto_1.UserDto),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], UsersController);
//# sourceMappingURL=users.controller.js.map