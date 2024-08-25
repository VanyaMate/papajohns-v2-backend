import {
    _FoodCategory, _FoodCategoryCreateData,
    _FoodCategoryUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IFoodCategoryService {
    create (data: _FoodCategoryCreateData): Promise<_FoodCategory>;

    update (id: string, data: _FoodCategoryUpdateData): Promise<_FoodCategory>;

    remove (id: string): Promise<_FoodCategory>;
}