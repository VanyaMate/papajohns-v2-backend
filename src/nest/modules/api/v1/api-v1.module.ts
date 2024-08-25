import { Module } from '@nestjs/common';
import {
    FoodMarkModule,
} from '@/nest/modules/api/v1/food-mark/food-mark.module';
import {
    FoodMarksModule,
} from '@/nest/modules/api/v1/food-marks/food-marks.module';


@Module({
    imports: [
        FoodMarkModule,
        FoodMarksModule,
    ],
})
export class ApiV1Module {
}