import { Repository } from 'typeorm';
import { Flashcard } from './flashcard.entity';
import { CreateFlashcardDto } from './dtos/create-flashcard.dto';
export declare class FlashcardsService {
    private repo;
    constructor(repo: Repository<Flashcard>);
    create(flashcardDto: CreateFlashcardDto): Promise<Flashcard>;
    findFlashcards(userId: number): Promise<Flashcard[]>;
}
