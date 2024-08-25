import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    _FoodMarkCreateData,
    _FoodMark,
    _FoodMarkUpdateData,
} from '@vanyamate/papajohns-v2-types';
import {
    IFoodMarkService,
} from '@/domain/services/food-mark/food-mark-service.interface';
import {
    PrismaFoodMarkService,
} from '@/domain/services/food-mark/implementations/prisma/prisma-food-mark.service';


@Injectable()
export class FoodMarkService implements IFoodMarkService {
    private readonly _service: IFoodMarkService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaFoodMarkService(this._prisma);
    }

    async create (data: _FoodMarkCreateData): Promise<_FoodMark> {
        try {
            return await this._service.create(data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async update (id: string, data: _FoodMarkUpdateData): Promise<_FoodMark> {
        try {
            return await this._service.update(id, data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async remove (id: string): Promise<_FoodMark> {
        try {
            return await this._service.remove(id);
        } catch (e) {
            Logger.error(e);
        }
    }
}