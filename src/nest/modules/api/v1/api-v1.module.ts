import { Module } from '@nestjs/common';
import {
    FoodMarkModule,
} from '@/nest/modules/api/v1/food-mark/food-mark.module';
import {
    FoodMarksModule,
} from '@/nest/modules/api/v1/food-marks/food-marks.module';
import {
    FoodCategoryModule,
} from '@/nest/modules/api/v1/food-category/food-category.module';
import {
    FoodCategoriesModule,
} from '@/nest/modules/api/v1/food-categories/food-categories.module';
import {
    PizzaAdditionalModule,
} from '@/nest/modules/api/v1/pizza-additional/pizza-additional.module';
import {
    PizzaSizeModule,
} from '@/nest/modules/api/v1/pizza-size/pizza-size.module';
import {
    PizzaAdditionalsModule,
} from '@/nest/modules/api/v1/pizza-additionals/pizza-additionals.module';
import {
    PizzaSizesModule,
} from '@/nest/modules/api/v1/pizza-sizes/pizza-sizes.module';


@Module({
    imports: [
        FoodMarkModule,
        FoodMarksModule,
        FoodCategoryModule,
        FoodCategoriesModule,
        PizzaAdditionalModule,
        PizzaAdditionalsModule,
        PizzaSizeModule,
        PizzaSizesModule,
    ],
})
export class ApiV1Module {
}