import { Module } from '@nestjs/common';
import {
    CategoryController,
} from '@/nest/modules/api/v1/category/category.controller';
import {
    AdminCategoryService,
} from '@/nest/modules/api/v1/category/admin-category.service';
import { ServicesModule } from '@/nest/modules/services/services.module';


@Module({
    controllers: [ CategoryController ],
    providers  : [ AdminCategoryService ],
    imports    : [ ServicesModule ],
})
export class CategoryModule {
}