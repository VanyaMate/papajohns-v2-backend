import {
    DomainAdminResponseFoodAdditional,
    DomainAdminResponseFoodAdditionals,
    DomainFoodAdditional,
    DomainFoodAdditionalCreateData,
    DomainFoodAdditionalUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IAdminFoodAdditionalService {
    create (data: DomainFoodAdditionalCreateData): Promise<DomainAdminResponseFoodAdditional>;

    update (id: string, data: DomainFoodAdditionalUpdateData): Promise<DomainFoodAdditional>;

    remove (id: string): Promise<DomainFoodAdditional>;

    getAllWithCounts (): Promise<DomainAdminResponseFoodAdditionals>;

    getOneFull (id: string): Promise<DomainAdminResponseFoodAdditional>;
}