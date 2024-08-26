import {
    IPizzaAdditionalsService,
} from '@/domain/services/pizza-additionals/pizza-additionals-service.interface';
import { PrismaClient } from '@prisma/client';
import { _PizzaAdditional } from '@vanyamate/papajohns-v2-types';


export class PrismaPizzaAdditionalsService implements IPizzaAdditionalsService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    getAll (): Promise<Array<_PizzaAdditional>> {
        return this._prisma.pizzaAdditional.findMany();
    }
}