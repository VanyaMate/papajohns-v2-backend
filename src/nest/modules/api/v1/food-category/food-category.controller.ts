import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import {
    FoodCategoryService,
} from '@/nest/modules/api/v1/food-category/food-category.service';
import {
    FoodCategoryCreateDataDto,
} from '@/nest/modules/api/v1/food-category/dto/food-category-create-data.dto';
import {
    FoodCategoryUpdateDataDto,
} from '@/nest/modules/api/v1/food-category/dto/food-category-update-data.dto';


@Controller(`/api/v1/food-category`)
export class FoodCategoryController {
    constructor (private readonly _service: FoodCategoryService) {
    }

    @Post()
    create (
        @Body() data: FoodCategoryCreateDataDto,
    ) {
        return this._service.create(data);
    }

    @Patch(`/:id`)
    update (
        @Param('id') id: string,
        @Body() data: FoodCategoryUpdateDataDto,
    ) {
        return this._service.update(id, data);
    }

    @Delete(`/:id`)
    remove (@Param('id') id: string) {
        return this._service.remove(id);
    }

}