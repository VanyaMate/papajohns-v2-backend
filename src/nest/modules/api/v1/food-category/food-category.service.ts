import {
    IFoodCategoryService,
} from '@/domain/services/category/food-category-service.interface';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    PrismaFoodCategoryService,
} from '@/domain/services/category/implementations/prisma/prisma-food-category.service';
import {
    _FoodCategory,
    _FoodCategoryCreateData,
    _FoodCategoryUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class FoodCategoryService implements IFoodCategoryService {
    private readonly _service: IFoodCategoryService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaFoodCategoryService(this._prisma);
    }

    async create (data: _FoodCategoryCreateData): Promise<_FoodCategory> {
        try {
            return await this._service.create(data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async update (id: string, data: _FoodCategoryUpdateData): Promise<_FoodCategory> {
        try {
            return await this._service.update(id, data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async remove (id: string): Promise<_FoodCategory> {
        try {
            return await this._service.remove(id);
        } catch (e) {
            Logger.error(e);
        }
    }
}