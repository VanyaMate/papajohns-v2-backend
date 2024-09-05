import {
    DomainAdminResponseFoodBase,
    DomainAdminResponseFoodBases,
    DomainFoodBase,
    DomainFoodBaseCreateData,
    DomainFoodBaseUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IAdminFoodBaseService {
    create (data: DomainFoodBaseCreateData): Promise<DomainAdminResponseFoodBase>;

    update (id: string, data: DomainFoodBaseUpdateData): Promise<DomainFoodBase>;

    remove (id: string): Promise<DomainFoodBase>;

    getAllWithCounts (): Promise<DomainAdminResponseFoodBases>;

    getOneFull (id: string): Promise<DomainAdminResponseFoodBase>;
}