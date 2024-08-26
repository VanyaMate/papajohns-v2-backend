import {
    IPizzaSizesService,
} from '@/domain/services/pizza-sizes/pizza-sizes-service.interface';
import { PrismaClient } from '@prisma/client';
import { _PizzaSize } from '@vanyamate/papajohns-v2-types';
import {
    prismaSizeToDomain,
} from '@/domain/services/pizza-size/implementations/prisma/converters/prismaSizeToDomain';


export class PrismaPizzaSizesService implements IPizzaSizesService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async getAll (): Promise<Array<_PizzaSize>> {
        const sizes = await this._prisma.pizzaSize.findMany({
            include: {
                linkToAdditional: {
                    include: {
                        additional: true,
                    },
                },
            },
        });

        return sizes.map((size) => prismaSizeToDomain(size, size.linkToAdditional.map(({ additional }) => additional)));
    }
}