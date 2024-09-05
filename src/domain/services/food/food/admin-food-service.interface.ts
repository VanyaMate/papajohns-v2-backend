import {
    DomainAdminResponseFood,
    DomainAdminResponseFoods,
    DomainFood,
    DomainFoodCreateData,
    DomainFoodUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IAdminFoodService {
    create (data: DomainFoodCreateData): Promise<DomainAdminResponseFood>;

    update (id: string, data: DomainFoodUpdateData): Promise<DomainFood>;

    remove (id: string): Promise<DomainFood>;

    getAllWithCounts (): Promise<DomainAdminResponseFoods>;

    getOneFull (id: string): Promise<DomainAdminResponseFood>;
}