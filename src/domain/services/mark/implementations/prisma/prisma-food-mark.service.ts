import {
    _FoodMarkCreateData,
    _FoodMark,
    _FoodMarkUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { PrismaClient } from '@prisma/client';
import {
    IFoodMarkService,
} from '@/domain/services/mark/food-mark-service.interface';


export class PrismaFoodMarkService implements IFoodMarkService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async create (data: _FoodMarkCreateData): Promise<_FoodMark> {
        return this._prisma.foodMark.create({ data });
    }

    async update (id: string, data: _FoodMarkUpdateData): Promise<_FoodMark> {
        return this._prisma.foodMark.update({ where: { id }, data });
    }

    async remove (id: string): Promise<_FoodMark> {
        return this._prisma.foodMark.delete({ where: { id } });
    }
}