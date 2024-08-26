import {
    IPizzaDoughsService,
} from '@/domain/services/pizza-doughs/pizza-doughs-service.interface';
import { PrismaClient } from '@prisma/client';
import { _PizzaDough } from '@vanyamate/papajohns-v2-types';
import {
    prismaDoughToDomain,
} from '@/domain/services/pizza-dough/implementations/prisma/converters/prismaDoughToDomain';
import {
    prismaSizeToDomain,
} from '@/domain/services/pizza-size/implementations/prisma/converters/prismaSizeToDomain';


export class PrismaPizzaDoughsService implements IPizzaDoughsService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async getAll (): Promise<Array<_PizzaDough>> {
        const doughs = await this._prisma.pizzaDough.findMany({
            include: {
                linkToSizes: {
                    include: {
                        size: {
                            include: {
                                linkToAdditional: {
                                    include: {
                                        additional: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        return doughs.map((dough) => {
            return prismaDoughToDomain(
                dough,
                dough.linkToSizes.map(
                    (link) => prismaSizeToDomain(
                        link.size,
                        link.size.linkToAdditional.map((link) => link.additional),
                    ),
                ),
            );
        });
    }
}