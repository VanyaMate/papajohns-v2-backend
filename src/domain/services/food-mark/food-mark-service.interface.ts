import {
    _FoodMark,
    _FoodMarkCreateData,
    _FoodMarkUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IFoodMarkService {
    create (data: _FoodMarkCreateData): Promise<_FoodMark>;

    update (id: string, data: _FoodMarkUpdateData): Promise<_FoodMark>;

    remove (id: string): Promise<_FoodMark>;
}