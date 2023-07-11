import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { SigninUserDto } from './dtos/signin-user.dto';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { User } from './user.entity';
import session from 'express-session';
interface CustomSession extends session.Session {
    userId: number;
}
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    getMe(user: User, session: CustomSession): Promise<number>;
    signout(session: any): Promise<void>;
    createUser(body: CreateUserDto, session: CustomSession): Promise<User>;
    signIn(body: SigninUserDto, session: CustomSession): Promise<User>;
    findUser(id: string): Promise<User>;
    findAllUsers(email: string): Promise<User[]>;
    removeUser(id: string): Promise<User>;
    updateUser(id: string, body: UpdateUserDto): Promise<User>;
}
export {};
