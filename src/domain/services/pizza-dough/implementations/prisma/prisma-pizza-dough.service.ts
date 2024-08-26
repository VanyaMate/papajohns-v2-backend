import {
    IPizzaDoughService,
} from '@/domain/services/pizza-dough/pizza-dough-service.interface';
import { PrismaClient } from '@prisma/client';
import {
    _PizzaDoughCreateData,
    _PizzaDough,
    _PizzaDoughUpdateData,
} from '@vanyamate/papajohns-v2-types';
import {
    prismaDoughToDomain,
} from '@/domain/services/pizza-dough/implementations/prisma/converters/prismaDoughToDomain';
import {
    prismaSizeToDomain,
} from '@/domain/services/pizza-size/implementations/prisma/converters/prismaSizeToDomain';


export class PrismaPizzaDoughService implements IPizzaDoughService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async create (data: _PizzaDoughCreateData): Promise<_PizzaDough> {
        const dough = await this._prisma.pizzaDough.create({ data });
        return prismaDoughToDomain(dough, []);
    }

    async update (id: string, data: _PizzaDoughUpdateData): Promise<_PizzaDough> {
        const dough = await this._prisma.pizzaDough.update({
            where  : { id },
            data,
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

        return prismaDoughToDomain(
            dough,
            dough.linkToSizes.map(
                (link) => prismaSizeToDomain(
                    link.size,
                    link.size.linkToAdditional.map((link) => link.additional),
                ),
            ),
        );
    }

    async remove (id: string): Promise<_PizzaDough> {
        const dough = await this._prisma.pizzaDough.delete({
            where  : { id },
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

        return prismaDoughToDomain(
            dough,
            dough.linkToSizes.map(
                (link) => prismaSizeToDomain(
                    link.size,
                    link.size.linkToAdditional.map((link) => link.additional),
                ),
            ),
        );
    }

    async addSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough> {
        const [ _, dough ] = await this._prisma.$transaction([
            this._prisma.pizzaDoughToSize.createMany({
                data: sizeIds.map((sizeId) => ({
                    doughId: id,
                    sizeId,
                })),
            }),
            this._prisma.pizzaDough.findUnique({
                where  : { id },
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
            }),
        ]);

        return prismaDoughToDomain(
            dough,
            dough.linkToSizes.map(
                (link) => prismaSizeToDomain(
                    link.size,
                    link.size.linkToAdditional.map((link) => link.additional),
                ),
            ),
        );
    }

    async removeSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough> {
        const [ _, dough ] = await this._prisma.$transaction([
            this._prisma.pizzaDoughToSize.deleteMany({
                where: {
                    doughId: id,
                    sizeId : { in: sizeIds },
                },
            }),
            this._prisma.pizzaDough.findUnique({
                where  : { id },
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
            }),
        ]);

        return prismaDoughToDomain(
            dough,
            dough.linkToSizes.map(
                (link) => prismaSizeToDomain(
                    link.size,
                    link.size.linkToAdditional.map((link) => link.additional),
                ),
            ),
        );
    }

    async setSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough> {
        const [ _, __, dough ] = await this._prisma.$transaction([
            this._prisma.pizzaDoughToSize.deleteMany({
                where: { doughId: id },
            }),
            this._prisma.pizzaDoughToSize.createMany({
                data: sizeIds.map((sizeId) => ({
                    doughId: id,
                    sizeId,
                })),
            }),
            this._prisma.pizzaDough.findUnique({
                where  : { id },
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
            }),
        ]);

        return prismaDoughToDomain(
            dough,
            dough.linkToSizes.map(
                (link) => prismaSizeToDomain(
                    link.size,
                    link.size.linkToAdditional.map((link) => link.additional),
                ),
            ),
        );
    }
}