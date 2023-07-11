import { AuthService } from './auth/auth.service';
import { FlashcardsService } from './flashcards/flashcards.service';
import { StatsService } from './stats/stats.service';
import { UsersService } from './users/users.service';
export declare class AppController {
    private authService;
    private statsService;
    private flashcardsService;
    private usersService;
    constructor(authService: AuthService, statsService: StatsService, flashcardsService: FlashcardsService, usersService: UsersService);
    login(req: any): Promise<{
        currentUser: {
            id: number;
            email: string;
            username: string;
        };
        access_token: string;
        flashcards: import("./flashcards/flashcard.entity").Flashcard[];
        stats: import("./stats/stats.entity").Stats[];
    }>;
    getProfile(req: any): Promise<{
        user: any;
        stats: import("./stats/stats.entity").Stats[];
        flashcards: import("./flashcards/flashcard.entity").Flashcard[];
    }>;
    getUserData(req: any, id: number): Promise<{
        user: import("./users/user.entity").User;
        stats: import("./stats/stats.entity").Stats[];
        flashcards: import("./flashcards/flashcard.entity").Flashcard[];
    }>;
}
