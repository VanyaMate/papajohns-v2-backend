import {
    _FoodCategory,
    _FoodCategoryCreateData,
    _FoodCategoryUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { PrismaClient } from '@prisma/client';
import {
    IFoodCategoryService,
} from '@/domain/services/category/food-category-service.interface';


export class PrismaFoodCategoryService implements IFoodCategoryService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    create (data: _FoodCategoryCreateData): Promise<_FoodCategory> {
        return this._prisma.foodCategory.create({ data });
    }

    update (id: string, data: _FoodCategoryUpdateData): Promise<_FoodCategory> {
        return this._prisma.foodCategory.update({ where: { id }, data });
    }

    remove (id: string): Promise<_FoodCategory> {
        return this._prisma.foodCategory.delete({ where: { id } });
    }
}