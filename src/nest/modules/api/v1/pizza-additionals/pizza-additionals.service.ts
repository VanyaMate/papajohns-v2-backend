import {
    IPizzaAdditionalsService,
} from '@/domain/services/pizza-additionals/pizza-additionals-service.interface';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    PrismaPizzaAdditionalsService,
} from '@/domain/services/pizza-additionals/implementations/prisma/prisma-pizza-additionals.service';
import { _PizzaAdditional } from '@vanyamate/papajohns-v2-types';
import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class PizzaAdditionalsService implements IPizzaAdditionalsService {
    private readonly _service: IPizzaAdditionalsService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaPizzaAdditionalsService(this._prisma);
    }

    async getAll (): Promise<Array<_PizzaAdditional>> {
        try {
            return await this._service.getAll();
        } catch (e) {
            Logger.error(e);
        }
    }
}