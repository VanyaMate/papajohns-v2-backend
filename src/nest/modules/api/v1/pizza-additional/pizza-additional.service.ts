import { Injectable, Logger } from '@nestjs/common';
import {
    IPizzaAdditionalService,
} from '@/domain/services/pizza-additional/pizza-additional-service.interface';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    PrismaPizzaAdditionalService,
} from '@/domain/services/pizza-additional/implementations/prisma/prisma-pizza-additional.service';
import {
    _PizzaAdditionalCreateData,
    _PizzaAdditional,
    _PizzaAdditionalUpdateData,
} from '@vanyamate/papajohns-v2-types';


@Injectable()
export class PizzaAdditionalService implements IPizzaAdditionalService {
    private readonly _service: IPizzaAdditionalService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaPizzaAdditionalService(this._prisma);
    }

    async create (data: _PizzaAdditionalCreateData): Promise<_PizzaAdditional> {
        try {
            return await this._service.create(data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async update (id: string, data: _PizzaAdditionalUpdateData): Promise<_PizzaAdditional> {
        try {
            return await this._service.update(id, data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async remove (id: string): Promise<_PizzaAdditional> {
        try {
            return await this._service.remove(id);
        } catch (e) {
            Logger.error(e);
        }
    }
}