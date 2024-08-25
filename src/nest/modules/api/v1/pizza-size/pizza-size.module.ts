import { Module } from '@nestjs/common';
import { ServicesModule } from '@/nest/modules/services/services.module';
import {
    PizzaSizeService,
} from '@/nest/modules/api/v1/pizza-size/pizza-size.service';
import {
    PizzaSizeController,
} from '@/nest/modules/api/v1/pizza-size/pizza-size.controller';


@Module({
    providers  : [ PizzaSizeService ],
    controllers: [ PizzaSizeController ],
    imports    : [ ServicesModule ],
})
export class PizzaSizeModule {
}
