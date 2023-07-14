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
exports.FlashcardsController = void 0;
const common_1 = require("@nestjs/common");
const flashcards_service_1 = require("./flashcards.service");
const create_flashcard_dto_1 = require("./dtos/create-flashcard.dto");
let FlashcardsController = exports.FlashcardsController = class FlashcardsController {
    constructor(flashcardsService) {
        this.flashcardsService = flashcardsService;
    }
    findFlashcards(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flashcardsService.findFlashcards(userId);
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const flashcard = yield this.flashcardsService.create(body);
            return flashcard;
        });
    }
};
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FlashcardsController.prototype, "findFlashcards", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flashcard_dto_1.CreateFlashcardDto]),
    __metadata("design:returntype", Promise)
], FlashcardsController.prototype, "create", null);
exports.FlashcardsController = FlashcardsController = __decorate([
    (0, common_1.Controller)('flashcards'),
    __metadata("design:paramtypes", [flashcards_service_1.FlashcardsService])
], FlashcardsController);
//# sourceMappingURL=flashcards.controller.js.map