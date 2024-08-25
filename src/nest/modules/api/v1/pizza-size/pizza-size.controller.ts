import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import {
    PizzaSizeService,
} from '@/nest/modules/api/v1/pizza-size/pizza-size.service';
import {
    PizzaSizeAdditionalDataDto,
} from '@/nest/modules/api/v1/pizza-size/dto/pizza-size-additional-data.dto';
import {
    PizzaSizeCreateDataDto,
} from '@/nest/modules/api/v1/pizza-size/dto/pizza-size-create-data.dto';
import {
    PizzaSizeUpdateDataDto,
} from '@/nest/modules/api/v1/pizza-size/dto/pizza-size-update-data.dto';


@Controller(`/api/v1/pizza-size`)
export class PizzaSizeController {
    constructor (private readonly _service: PizzaSizeService) {
    }

    @Post()
    create (@Body() data: PizzaSizeCreateDataDto) {
        return this._service.create(data);
    }

    @Patch(`/:id`)
    update (
        @Param('id') id: string,
        @Body() data: PizzaSizeUpdateDataDto,
    ) {
        return this._service.update(id, data);
    }

    @Delete(`/:id`)
    remove (@Param('id') id: string) {
        return this._service.remove(id);
    }

    @Patch(`/:id/additional`)
    addAdditional (
        @Param('id') id: string,
        @Body() additional: PizzaSizeAdditionalDataDto,
    ) {
        return this._service.addAdditional(id, additional.ids);
    }

    @Delete(`/:id/additional`)
    removeAdditional (
        @Param('id') id: string,
        @Body() additional: PizzaSizeAdditionalDataDto,
    ) {
        return this._service.removeAdditional(id, additional.ids);
    }

    @Post(`/:id/additional`)
    setAdditional (
        @Param('id') id: string,
        @Body() additional: PizzaSizeAdditionalDataDto,
    ) {
        return this._service.setAdditional(id, additional.ids);
    }
}