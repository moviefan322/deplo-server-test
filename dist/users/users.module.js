"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const users_controller_1 = require("./users.controller");
const users_service_1 = require("./users.service");
const auth_service_1 = require("../auth/auth.service");
const flashcards_module_1 = require("../flashcards/flashcards.module");
const stats_module_1 = require("../stats/stats.module");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("./user.entity");
const current_user_interceptor_1 = require("../interceptors/current-user.interceptor");
let UsersModule = exports.UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]), flashcards_module_1.FlashcardsModule, stats_module_1.StatsModule],
        controllers: [users_controller_1.UsersController],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: current_user_interceptor_1.CurrentUserInterceptor,
            },
            users_service_1.UsersService,
            auth_service_1.AuthService,
            jwt_1.JwtService,
        ],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map