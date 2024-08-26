import { Controller, Get } from '@nestjs/common';
import {
    PizzaAdditionalsService,
} from '@/nest/modules/api/v1/pizza-additionals/pizza-additionals.service';


@Controller(`/api/v1/pizza-additionals`)
export class PizzaAdditionalsController {
    constructor (private readonly _service: PizzaAdditionalsService) {
    }

    @Get()
    getAll () {
        return this._service.getAll();
    }
}