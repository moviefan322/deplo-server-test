"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const filePath = (0, path_1.join)(__dirname, '..', '..', 'lessonData', 'unit1.json');
const getLessons = async () => {
    const unit1 = await new Promise((resolve, reject) => {
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
};
let LessonsService = exports.LessonsService = class LessonsService {
    async getAllLLessons() {
        const allLessons = await getLessons();
        return JSON.stringify(allLessons);
    }
    async getLesson(lessonId) {
        const allLessons = await getLessons();
        return JSON.stringify(allLessons[+lessonId - 1]);
    }
};
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)()
], LessonsService);
//# sourceMappingURL=lessons.service.js.map