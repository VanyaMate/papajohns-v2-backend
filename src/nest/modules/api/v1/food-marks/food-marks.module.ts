import { Module } from '@nestjs/common';
import {
    FoodMarksService,
} from '@/nest/modules/api/v1/food-marks/food-marks.service';
import {
    FoodMarksController,
} from '@/nest/modules/api/v1/food-marks/food-marks.controller';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    providers  : [ FoodMarksService ],
    controllers: [ FoodMarksController ],
    imports    : [ ServicesModule ],
})
export class FoodMarksModule {
}