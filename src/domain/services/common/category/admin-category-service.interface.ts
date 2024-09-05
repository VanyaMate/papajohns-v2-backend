import {
    DomainAdminResponseCategories,
    DomainAdminResponseCategory,
    DomainCategory,
    DomainCategoryCreateData,
    DomainCategoryUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IAdminCategoryService {
    create (data: DomainCategoryCreateData): Promise<DomainAdminResponseCategory>;

    update (id: string, data: DomainCategoryUpdateData): Promise<DomainCategory>;

    remove (id: string): Promise<DomainCategory>;

    getAllWithCounts (): Promise<DomainAdminResponseCategories>;

    getOneFull (id: string): Promise<DomainAdminResponseCategory>;
}