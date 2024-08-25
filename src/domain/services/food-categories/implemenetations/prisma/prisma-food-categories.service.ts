import {
    IFoodCategoriesService,
} from '@/domain/services/food-categories/food-categories-service.interface';
import { PrismaClient } from '@prisma/client';
import { _FoodCategory } from '@vanyamate/papajohns-v2-types';


export class PrismaFoodCategoriesService implements IFoodCategoriesService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async getAll (): Promise<Array<_FoodCategory>> {
        return this._prisma.foodCategory.findMany();
    }
}