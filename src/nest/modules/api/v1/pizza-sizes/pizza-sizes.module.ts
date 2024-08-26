import { Module } from '@nestjs/common';
import {
    PizzaSizesService,
} from '@/nest/modules/api/v1/pizza-sizes/pizza-sizes.service';
import {
    PizzaSizesController,
} from '@/nest/modules/api/v1/pizza-sizes/pizza-sizes.controller';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    providers  : [ PizzaSizesService ],
    controllers: [ PizzaSizesController ],
    imports    : [ ServicesModule ],
})
export class PizzaSizesModule {
}