import { Body, Controller, Post } from '@nestjs/common';
import {
    AdminCategoryService,
} from '@/nest/modules/api/v1/category/admin-category.service';
import {
    CategoryCreateDataDto,
} from '@/nest/modules/api/v1/category/dto/category-create-data.dto';


@Controller(`/api/v1/category`)
export class CategoryController {
    constructor (private readonly _adminService: AdminCategoryService) {
    }

    @Post()
    create (
        @Body() data: CategoryCreateDataDto,
    ) {
        return this._adminService.create(data);
    }
}