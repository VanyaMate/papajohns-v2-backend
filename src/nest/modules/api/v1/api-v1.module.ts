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


@Module({
    imports: [
        FoodMarkModule,
        FoodMarksModule,
        FoodCategoryModule,
        FoodCategoriesModule,
        PizzaAdditionalModule,
    ],
})
export class ApiV1Module {
}