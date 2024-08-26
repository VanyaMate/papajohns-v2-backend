import {
    IPizzaSizeService,
} from '@/domain/services/pizza-size/pizza-size-service.interface';
import { PrismaClient } from '@prisma/client';
import {
    _PizzaSizeCreateData,
    _PizzaSize,
    _PizzaSizeUpdateData,
} from '@vanyamate/papajohns-v2-types';
import {
    prismaSizeToDomain,
} from '@/domain/services/pizza-size/implementations/prisma/converters/prismaSizeToDomain';
import {
    prismaSizeInclude,
} from '@/domain/services/pizza-size/implementations/prisma/includes/prismaSizeInclude';


export class PrismaPizzaSizeService implements IPizzaSizeService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async create (data: _PizzaSizeCreateData): Promise<_PizzaSize> {
        const size = await this._prisma.pizzaSize.create({ data });

        return prismaSizeToDomain(size, []);
    }

    async update (id: string, data: _PizzaSizeUpdateData): Promise<_PizzaSize> {
        const size = await this._prisma.pizzaSize.update({
            where  : { id },
            data,
            include: {
                linkToAdditional: {
                    include: {
                        additional: true,
                    },
                },
            },
        });

        return prismaSizeToDomain(size, size.linkToAdditional.map(({ additional }) => additional));
    }

    async remove (id: string): Promise<_PizzaSize> {
        const size = await this._prisma.pizzaSize.delete({
            where  : { id },
            include: {
                linkToAdditional: {
                    include: {
                        additional: true,
                    },
                },
            },
        });

        return prismaSizeToDomain(size, size.linkToAdditional.map(({ additional }) => additional));
    }

    async addAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize> {
        const [ additionalLinks, size ] = await this._prisma.$transaction([
            this._prisma.pizzaSizeToAdditional.createMany({
                data: additionalIds.map((additionalId) => ({
                    sizeId: id,
                    additionalId,
                })),
            }),
            this._prisma.pizzaSize.findUnique({
                where  : { id },
                include: {
                    linkToAdditional: {
                        include: {
                            additional: true,
                        },
                    },
                },
            }),
        ]);

        return prismaSizeToDomain(size, size.linkToAdditional.map(({ additional }) => additional));
    }

    async removeAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize> {
        const [ _, size ] = await this._prisma.$transaction([
            this._prisma.pizzaSizeToAdditional.deleteMany({
                where: {
                    sizeId      : id,
                    additionalId: { in: additionalIds },
                },
            }),
            this._prisma.pizzaSize.findUnique({
                where  : { id },
                include: {
                    linkToAdditional: {
                        include: {
                            additional: true,
                        },
                    },
                },
            }),
        ]);

        return prismaSizeToDomain(size, size.linkToAdditional.map(({ additional }) => additional));
    }

    async setAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize> {
        const [ _, __, size ] = await this._prisma.$transaction([
            this._prisma.pizzaSizeToAdditional.deleteMany({ where: { sizeId: id } }),
            this._prisma.pizzaSizeToAdditional.createMany({
                data: additionalIds.map((additionalId) => ({
                    sizeId: id,
                    additionalId,
                })),
            }),
            this._prisma.pizzaSize.findUnique({
                where  : { id },
                include: {
                    linkToAdditional: {
                        include: {
                            additional: true,
                        },
                    },
                },
            }),
        ]);

        return prismaSizeToDomain(size, size.linkToAdditional.map(({ additional }) => additional));
    }
}