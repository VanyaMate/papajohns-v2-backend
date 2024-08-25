import {
    IFoodCategoriesService,
} from '@/domain/services/food-categories/food-categories-service.interface';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    PrismaFoodCategoriesService,
} from '@/domain/services/food-categories/implemenetations/prisma/prisma-food-categories.service';
import { _FoodCategory } from '@vanyamate/papajohns-v2-types';
import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class FoodCategoriesService implements IFoodCategoriesService {
    private readonly _service: IFoodCategoriesService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaFoodCategoriesService(this._prisma);
    }

    async getAll (): Promise<Array<_FoodCategory>> {
        try {
            return await this._service.getAll();
        } catch (e) {
            Logger.error(e);
        }
    }
}