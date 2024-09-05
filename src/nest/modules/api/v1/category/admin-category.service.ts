import { Injectable } from '@nestjs/common';
import {
    IAdminCategoryService,
} from '@/domain/services/common/category/admin-category-service.interface';
import { PrismaService } from '@/nest/modules/services/prisma/prisma.service';
import {
    PrismaAdminCategoryService,
} from '@/domain/services/common/category/implementations/prisma/prisma-admin-category.service';
import { DomainCategoryCreateData } from '@vanyamate/papajohns-v2-types';


@Injectable()
export class AdminCategoryService {
    private readonly _service: IAdminCategoryService;

    constructor (private readonly _prisma: PrismaService) {
        this._service = new PrismaAdminCategoryService(this._prisma);
    }

    async create (data: DomainCategoryCreateData) {
        try {
            return await this._service.create(data);
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}