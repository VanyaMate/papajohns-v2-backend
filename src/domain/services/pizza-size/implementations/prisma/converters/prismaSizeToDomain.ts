import { PizzaAdditional, PizzaSize } from '@prisma/client';
import { _PizzaSize } from '@vanyamate/papajohns-v2-types';


export const prismaSizeToDomain = function (size: PizzaSize, additional: PizzaAdditional[]): _PizzaSize {
    return {
        id        : size.id,
        size      : size.size,
        multiplier: size.multiplier,
        additional: additional,
    };
};