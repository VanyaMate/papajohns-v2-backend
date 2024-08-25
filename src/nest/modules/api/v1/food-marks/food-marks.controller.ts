import { Controller, Get } from '@nestjs/common';
import {
    FoodMarksService,
} from '@/nest/modules/api/v1/food-marks/food-marks.service';


@Controller('/api/v1/food-marks')
export class FoodMarksController {
    constructor (private readonly _service: FoodMarksService) {
    }

    @Get()
    getAll () {
        return this._service.getAll();
    }
}