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
exports.CurrentUserInterceptor = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
let CurrentUserInterceptor = exports.CurrentUserInterceptor = class CurrentUserInterceptor {
    constructor(usersService) {
        this.usersService = usersService;
    }
    intercept(context, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = context.switchToHttp().getRequest();
            const { userId } = request.session || {};
            if (userId) {
                const user = yield this.usersService.findOne(userId);
                request.currentUser = user;
            }
            return handler.handle();
        });
    }
};
exports.CurrentUserInterceptor = CurrentUserInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], CurrentUserInterceptor);
//# sourceMappingURL=current-user.interceptor.js.map