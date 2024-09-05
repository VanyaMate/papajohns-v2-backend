import {
    DomainCategoryType,
    DomainCompositeCategory,
    DomainFood,
    DomainFoodAdditional,
    DomainFoodBase, DomainFoodIngredient,
    DomainFoodSize,
} from '@vanyamate/papajohns-v2-types';
import { Category } from '@prisma/client';


export const prismaCategoryToDomainCompositeCategory = function (
    category: Category,
    data: {
        bases: Array<DomainFoodBase>,
        foods: Array<DomainFood>,
        sizes: Array<DomainFoodSize>,
        additionals: Array<DomainFoodAdditional>,
        ingredients: Array<DomainFoodIngredient>,
    },
): DomainCompositeCategory {
    return {
        id         : category.id,
        image      : category.image,
        type       : category.type as DomainCategoryType,
        bases      : data.bases,
        foods      : data.foods,
        sizes      : data.sizes,
        additionals: data.additionals,
        ingredients: data.ingredients,
    };
};