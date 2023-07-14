import { UsersService } from '../users/users.service';
import { FlashcardsService } from 'src/flashcards/flashcards.service';
import { StatsService } from 'src/stats/stats.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    private flashcardsService;
    private statsService;
    constructor(usersService: UsersService, jwtService: JwtService, flashcardsService: FlashcardsService, statsService: StatsService);
    signup(email: string, password: string, username: string): Promise<import("../users/user.entity").User>;
    validateUser(email: string, password: string): Promise<import("../users/user.entity").User>;
    login(user: any): Promise<{
        currentUser: {
            id: number;
            email: string;
            username: string;
        };
        access_token: string;
        flashcards: import("../flashcards/flashcard.entity").Flashcard[];
        stats: import("../stats/stats.entity").Stats[];
    }>;
    signin(email: string, password: string): Promise<import("../users/user.entity").User>;
}
