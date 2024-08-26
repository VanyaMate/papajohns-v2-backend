import { _FoodMark } from '@vanyamate/papajohns-v2-types';


export interface IFoodMarksService {
    getAll (): Promise<Array<_FoodMark>>;
}