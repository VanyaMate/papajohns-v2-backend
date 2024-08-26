import { Module } from '@nestjs/common';
import {
    PizzaAdditionalsService,
} from '@/nest/modules/api/v1/pizza-additionals/pizza-additionals.service';
import {
    PizzaAdditionalsController,
} from '@/nest/modules/api/v1/pizza-additionals/pizza-additionals.controller';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    providers  : [ PizzaAdditionalsService ],
    controllers: [ PizzaAdditionalsController ],
    imports    : [ ServicesModule ],
})
export class PizzaAdditionalsModule {
}