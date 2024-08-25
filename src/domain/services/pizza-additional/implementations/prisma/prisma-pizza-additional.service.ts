import {
    IPizzaAdditionalService,
} from '@/domain/services/pizza-additional/pizza-additional-service.interface';
import { PrismaClient } from '@prisma/client';
import {
    _PizzaAdditionalCreateData,
    _PizzaAdditional,
    _PizzaAdditionalUpdateData,
} from '@vanyamate/papajohns-v2-types';


export class PrismaPizzaAdditionalService implements IPizzaAdditionalService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async create (data: _PizzaAdditionalCreateData): Promise<_PizzaAdditional> {
        return this._prisma.pizzaAdditional.create({ data });
    }

    async update (id: string, data: _PizzaAdditionalUpdateData): Promise<_PizzaAdditional> {
        return this._prisma.pizzaAdditional.update({ where: { id }, data });
    }

    async remove (id: string): Promise<_PizzaAdditional> {
        return this._prisma.pizzaAdditional.delete({ where: { id } });
    }
}