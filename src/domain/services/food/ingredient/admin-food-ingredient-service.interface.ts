import {
    DomainAdminResponseFoodIngredient,
    DomainAdminResponseFoodIngredients,
    DomainFoodIngredient,
    DomainFoodIngredientCreateData,
    DomainFoodIngredientUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IAdminFoodIngredientService {
    create (data: DomainFoodIngredientCreateData): Promise<DomainAdminResponseFoodIngredient>;

    update (id: string, data: DomainFoodIngredientUpdateData): Promise<DomainFoodIngredient>;

    remove (id: string): Promise<DomainFoodIngredient>;

    getAllWithCounts (): Promise<DomainAdminResponseFoodIngredients>;

    getOneFull (id: string): Promise<DomainAdminResponseFoodIngredient>;
}