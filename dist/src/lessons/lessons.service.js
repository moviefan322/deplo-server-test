"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const filePath = (0, path_1.join)(__dirname, '..', '..', 'lessonData', 'unit1.json');
const getLessons = () => __awaiter(void 0, void 0, void 0, function* () {
    const unit1 = yield new Promise((resolve, reject) => {
        (0, fs_1.readFile)(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            resolve(data);
        });
    });
    const allLessons = [unit1];
    return allLessons;
});
let LessonsService = exports.LessonsService = class LessonsService {
    getAllLLessons() {
        return __awaiter(this, void 0, void 0, function* () {
            const allLessons = yield getLessons();
            return JSON.stringify(allLessons);
        });
    }
    getLesson(lessonId) {
        return __awaiter(this, void 0, void 0, function* () {
            const allLessons = yield getLessons();
            return JSON.stringify(allLessons[+lessonId - 1]);
        });
    }
};
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)()
], LessonsService);
//# sourceMappingURL=lessons.service.js.map