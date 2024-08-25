import { _FoodCategory } from '@vanyamate/papajohns-v2-types';


export interface IFoodCategoriesService {
    getAll (): Promise<Array<_FoodCategory>>;
}