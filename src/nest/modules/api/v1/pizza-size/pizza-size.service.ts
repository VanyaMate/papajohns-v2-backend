import { Injectable, Logger } from '@nestjs/common';
import {
    IPizzaSizeService,
} from '@/domain/services/pizza-size/pizza-size-service.interface';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    PrismaPizzaSizeService,
} from '@/domain/services/pizza-size/implementations/prisma/prisma-pizza-size.service';
import {
    _PizzaSizeCreateData,
    _PizzaSize,
    _PizzaSizeUpdateData,
} from '@vanyamate/papajohns-v2-types';


@Injectable()
export class PizzaSizeService implements IPizzaSizeService {
    private readonly _service: IPizzaSizeService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaPizzaSizeService(this._prisma);
    }

    async create (data: _PizzaSizeCreateData): Promise<_PizzaSize> {
        try {
            return await this._service.create(data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async update (id: string, data: _PizzaSizeUpdateData): Promise<_PizzaSize> {
        try {
            return await this._service.update(id, data);
        } catch (e) {
            Logger.error(e);
        }
    }

    async remove (id: string): Promise<_PizzaSize> {
        try {
            return await this._service.remove(id);
        } catch (e) {
            Logger.error(e);
        }
    }

    async addAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize> {
        try {
            return await this._service.addAdditional(id, additionalIds);
        } catch (e) {
            Logger.error(e);
        }
    }

    async removeAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize> {
        try {
            return await this._service.removeAdditional(id, additionalIds);
        } catch (e) {
            Logger.error(e);
        }
    }

    async setAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize> {
        try {
            return await this._service.setAdditional(id, additionalIds);
        } catch (e) {
            Logger.error(e);
        }
    }
}