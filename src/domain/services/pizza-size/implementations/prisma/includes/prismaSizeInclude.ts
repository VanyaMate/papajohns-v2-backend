import { Prisma } from '@prisma/client';


export const prismaSizeInclude: Prisma.PizzaSizeInclude = {
    linkToAdditional: {
        include: {
            additional: true,
        },
    },
};