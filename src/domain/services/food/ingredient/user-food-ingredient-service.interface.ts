import { DomainFoodIngredient } from '@vanyamate/papajohns-v2-types';


export interface IUserFoodIngredientService {
    getByFoodId (foodId: string): Promise<Array<DomainFoodIngredient>>;
}