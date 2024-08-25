import { Module } from '@nestjs/common';
import {
    FoodCategoryService,
} from '@/nest/modules/api/v1/food-category/food-category.service';
import {
    FoodCategoryController,
} from '@/nest/modules/api/v1/food-category/food-category.controller';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    providers  : [ FoodCategoryService ],
    controllers: [ FoodCategoryController ],
    imports    : [ ServicesModule ],
})
export class FoodCategoryModule {
}