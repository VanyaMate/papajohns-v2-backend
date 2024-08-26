import {
    IPizzaSizesService,
} from '@/domain/services/pizza-sizes/pizza-sizes-service.interface';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    PrismaPizzaSizesService,
} from '@/domain/services/pizza-sizes/implementations/prisma/prisma-pizza-sizes.service';
import { _PizzaSize } from '@vanyamate/papajohns-v2-types';
import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class PizzaSizesService implements IPizzaSizesService {
    private readonly _service: IPizzaSizesService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaPizzaSizesService(this._prisma);
    }

    async getAll (): Promise<Array<_PizzaSize>> {
        try {
            return this._service.getAll();
        } catch (e) {
            Logger.error(e);
        }
    }
}