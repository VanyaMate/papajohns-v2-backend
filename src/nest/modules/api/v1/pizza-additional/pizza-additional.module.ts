import { Module } from '@nestjs/common';
import {
    PizzaAdditionalService,
} from '@/nest/modules/api/v1/pizza-additional/pizza-additional.service';
import {
    PizzaAdditionalController,
} from '@/nest/modules/api/v1/pizza-additional/pizza-additional.controller';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    providers  : [ PizzaAdditionalService ],
    controllers: [ PizzaAdditionalController ],
    imports    : [ ServicesModule ],
})
export class PizzaAdditionalModule {
}