import { PizzaDough } from '@prisma/client';
import { _PizzaDough, _PizzaSize } from '@vanyamate/papajohns-v2-types';


export const prismaDoughToDomain = function (data: PizzaDough, sizes: _PizzaSize[]): _PizzaDough {
    return {
        id   : data.id,
        title: data.title,
        price: data.price,
        sizes,
    };
};