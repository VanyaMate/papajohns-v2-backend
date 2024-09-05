import {
    IAdminCategoryService,
} from '@/domain/services/common/category/admin-category-service.interface';
import { PrismaClient } from '@prisma/client';
import {
    DomainCategoryCreateData,
    DomainAdminResponseCategory,
    DomainCategoryUpdateData,
    DomainCategory,
    DomainAdminResponseCategories,
} from '@vanyamate/papajohns-v2-types';
import {
    prismaCategoryToDomainCompositeCategory,
} from '@/domain/services/common/category/implementations/prisma/converters/prismaCategoryToDomainCompositeCategory';


export class PrismaAdminCategoryService implements IAdminCategoryService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async create (data: DomainCategoryCreateData): Promise<DomainAdminResponseCategory> {
        try {
            const category = await this._prisma.category
                .create({
                    data: {
                        image: data.image,
                        type : data.type,
                    },
                });

            return prismaCategoryToDomainCompositeCategory(
                category,
                {
                    bases      : [],
                    foods      : [],
                    sizes      : [],
                    additionals: [],
                    ingredients: [],
                },
            );
        } catch (e) {
            throw `Cant create new category. ${ e.message.split('\n').slice(-1)[0] }`;
        }
    }

    async update (id: string, data: DomainCategoryUpdateData): Promise<DomainCategory> {
        throw new Error('Method not implemented.');
    }

    async remove (id: string): Promise<DomainCategory> {
        throw new Error('Method not implemented.');
    }

    async getAllWithCounts (): Promise<DomainAdminResponseCategories> {
        throw new Error('Method not implemented.');
    }

    async getOneFull (id: string): Promise<DomainAdminResponseCategory> {
        throw new Error('Method not implemented.');
    }
}