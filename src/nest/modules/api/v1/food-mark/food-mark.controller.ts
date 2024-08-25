import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import {
    FoodMarkService,
} from '@/nest/modules/api/v1/food-mark/food-mark.service';
import {
    FoodMarkCreateDataDto,
} from '@/nest/modules/api/v1/food-mark/dto/food-mark-create-data.dto';
import {
    FoodMarkUpdateDataDto,
} from '@/nest/modules/api/v1/food-mark/dto/food-mark-update-data.dto';


@Controller('/api/v1/food-mark')
export class FoodMarkController {
    constructor (private readonly _service: FoodMarkService) {
    }

    @Post()
    create (@Body() data: FoodMarkCreateDataDto) {
        return this._service.create(data);
    }

    @Patch(`/:id`)
    update (
        @Body() data: FoodMarkUpdateDataDto,
        @Param('id') id: string,
    ) {
        return this._service.update(id, data);
    }

    @Delete(`/:id`)
    remove (
        @Param('id') id: string,
    ) {
        return this._service.remove(id);
    }
}