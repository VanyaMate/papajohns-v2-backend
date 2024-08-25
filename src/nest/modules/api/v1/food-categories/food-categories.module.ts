import { Module } from '@nestjs/common';
import {
    FoodCategoriesService,
} from '@/nest/modules/api/v1/food-categories/food-categories.service';
import {
    FoodCategoriesController,
} from '@/nest/modules/api/v1/food-categories/food-categories.controller';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    providers  : [ FoodCategoriesService ],
    controllers: [ FoodCategoriesController ],
    imports    : [ ServicesModule ],
})
export class FoodCategoriesModule {
}