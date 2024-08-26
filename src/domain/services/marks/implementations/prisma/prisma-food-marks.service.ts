import { PrismaClient } from '@prisma/client';
import { _FoodMark } from '@vanyamate/papajohns-v2-types';
import {
    IFoodMarksService
} from '@/domain/services/marks/food-marks-service.interface';


export class PrismaFoodMarksService implements IFoodMarksService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async getAll (): Promise<Array<_FoodMark>> {
        return this._prisma.foodMark.findMany();
    }
}