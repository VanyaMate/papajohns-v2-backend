import { Module } from '@nestjs/common';
import { CategoryModule } from '@/nest/modules/api/v1/category/category.module';


@Module({
    imports: [ CategoryModule ],
})
export class ApiV1Module {
}