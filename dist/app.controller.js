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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const auth_service_1 = require("./auth/auth.service");
const flashcards_service_1 = require("./flashcards/flashcards.service");
const stats_service_1 = require("./stats/stats.service");
const users_service_1 = require("./users/users.service");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
let AppController = exports.AppController = class AppController {
    constructor(authService, statsService, flashcardsService, usersService) {
        this.authService = authService;
        this.statsService = statsService;
        this.flashcardsService = flashcardsService;
        this.usersService = usersService;
    }
    async login(req) {
        console.log(req);
        return this.authService.login(req.user);
    }
    async getProfile(req) {
        const stats = await this.statsService.findStats(req.user.id);
        const flashcards = await this.flashcardsService.findFlashcards(req.user.id);
        return { user: req.user, stats, flashcards };
    }
    async getUserData(req, id) {
        const user = await this.usersService.findOne(id);
        const stats = await this.statsService.findStats(id);
        const flashcards = await this.flashcardsService.findFlashcards(id);
        return { user, stats, flashcards };
    }
};
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)("auth/login"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)("profile"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUserData", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        stats_service_1.StatsService,
        flashcards_service_1.FlashcardsService,
        users_service_1.UsersService])
], AppController);
//# sourceMappingURL=app.controller.js.map