import { Module } from '@nestjs/common';
import {
    FoodMarkService,
} from '@/nest/modules/api/v1/food-mark/food-mark.service';
import {
    FoodMarkController,
} from '@/nest/modules/api/v1/food-mark/food-mark.controller';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    providers  : [ FoodMarkService ],
    controllers: [ FoodMarkController ],
    imports    : [ ServicesModule ],
})
export class FoodMarkModule {
}