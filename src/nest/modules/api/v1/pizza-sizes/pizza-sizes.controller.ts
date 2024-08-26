import { Controller, Get } from '@nestjs/common';
import {
    PizzaSizesService,
} from '@/nest/modules/api/v1/pizza-sizes/pizza-sizes.service';


@Controller(`/api/v1/pizza-sizes`)
export class PizzaSizesController {
    constructor (private readonly _service: PizzaSizesService) {
    }

    @Get()
    getAll () {
        return this._service.getAll();
    }
}