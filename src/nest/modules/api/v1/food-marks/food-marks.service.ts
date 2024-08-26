import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';

import { _FoodMark } from '@vanyamate/papajohns-v2-types';
import {
    PrismaFoodMarksService,
} from '@/domain/services/marks/implementations/prisma/prisma-food-marks.service';
import {
    IFoodMarksService,
} from '@/domain/services/marks/food-marks-service.interface';


@Injectable()
export class FoodMarksService implements IFoodMarksService {
    private readonly _service: IFoodMarksService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaFoodMarksService(this._prisma);
    }

    async getAll (): Promise<Array<_FoodMark>> {
        try {
            return await this._service.getAll();
        } catch (e) {
            Logger.error(e);
        }
    }
}