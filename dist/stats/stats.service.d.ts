import { Repository } from 'typeorm';
import { Stats } from './stats.entity';
import { CreateStatDto } from './dtos/create-stat.dto';
import { UpdateStatDto } from './dtos/update-stat.dto';
export declare class StatsService {
    private repo;
    constructor(repo: Repository<Stats>);
    create(statDto: CreateStatDto): Promise<Stats>;
    findStats(userId: number): Promise<Stats[]>;
    update(id: number, statDto: UpdateStatDto): Promise<Stats>;
}
