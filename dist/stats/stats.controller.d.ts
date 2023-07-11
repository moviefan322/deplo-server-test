import { StatsService } from './stats.service';
import { CreateStatDto } from './dtos/create-stat.dto';
import { UpdateStatDto } from './dtos/update-stat.dto';
export declare class StatsController {
    private readonly statsService;
    constructor(statsService: StatsService);
    findStats(userId: number): Promise<import("./stats.entity").Stats[]>;
    create(body: CreateStatDto): Promise<import("./stats.entity").Stats>;
    update(id: number, body: UpdateStatDto): Promise<import("./stats.entity").Stats>;
}
