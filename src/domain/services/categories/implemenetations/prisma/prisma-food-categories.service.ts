import {
    IFoodCategoriesService,
} from '@/domain/services/categories/food-categories-service.interface';
import { PrismaClient } from '@prisma/client';
import { _FoodCategory } from '@vanyamate/papajohns-v2-types';


export class PrismaFoodCategoriesService implements IFoodCategoriesService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async getAll (): Promise<Array<_FoodCategory>> {
        const categories = await this._prisma.foodCategory.findMany({
            include: {
                linkToFoods: {
                    include: {
                        food: true,
                    },
                },
            },
        });
        
        return categories.map((category) => ({
            id   : category.id,
            color: category.color,
            icon : category.icon,
            title: category.title,
            foods: category.linkToFoods.map((link) => link.food),
        }));
    }
}