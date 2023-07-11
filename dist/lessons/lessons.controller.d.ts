import { LessonsService } from './lessons.service';
export declare class LessonsController {
    private lessonsService;
    constructor(lessonsService: LessonsService);
    getLessons(): Promise<string>;
    getLesson(lessonId: string): Promise<string>;
}
