import {
    DomainAdminResponseFoodSize,
    DomainAdminResponseFoodSizes,
    DomainFoodSize,
    DomainFoodSizeCreateData,
    DomainFoodSizeUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IAdminFoodSizeService {
    create (data: DomainFoodSizeCreateData): Promise<DomainAdminResponseFoodSize>;

    update (id: string, data: DomainFoodSizeUpdateData): Promise<DomainFoodSize>;

    remove (id: string): Promise<DomainFoodSize>;

    getAllWithCounts (): Promise<DomainAdminResponseFoodSizes>;

    getOneFull (id: string): Promise<DomainAdminResponseFoodSize>;
}