import { Controller, Get } from '@nestjs/common';
import {
    FoodCategoriesService,
} from '@/nest/modules/api/v1/food-categories/food-categories.service';


@Controller(`/api/v1/food-categories`)
export class FoodCategoriesController {
    constructor (private readonly _service: FoodCategoriesService) {
    }

    @Get()
    getAll () {
        return this._service.getAll();
    }

}