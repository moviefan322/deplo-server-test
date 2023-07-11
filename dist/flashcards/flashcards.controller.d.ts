import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto } from './dtos/create-flashcard.dto';
export declare class FlashcardsController {
    private readonly flashcardsService;
    constructor(flashcardsService: FlashcardsService);
    findFlashcards(userId: number): Promise<import("./flashcard.entity").Flashcard[]>;
    create(body: CreateFlashcardDto): Promise<import("./flashcard.entity").Flashcard>;
}
