import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import {
    PizzaAdditionalService,
} from '@/nest/modules/api/v1/pizza-additional/pizza-additional.service';
import {
    PizzaAdditionalUpdateDataDto,
} from '@/nest/modules/api/v1/pizza-additional/dto/pizza-additional-update-data.dto';
import {
    PizzaAdditionalCreateDataDto,
} from '@/nest/modules/api/v1/pizza-additional/dto/pizza-additional-create-data.dto';


@Controller(`/api/v1/pizza-additional`)
export class PizzaAdditionalController {
    constructor (private readonly _service: PizzaAdditionalService) {
    }

    @Post()
    create (@Body() data: PizzaAdditionalCreateDataDto) {
        return this._service.create(data);
    }

    @Patch(`/:id`)
    update (
        @Param('id') id: string,
        @Body() data: PizzaAdditionalUpdateDataDto,
    ) {
        return this._service.update(id, data);
    }

    @Delete(`/:id`)
    remove (@Param('id') id: string) {
        return this._service.remove(id);
    }
}