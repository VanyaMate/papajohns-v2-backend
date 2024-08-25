import { _FoodCategoryCreateData } from '@vanyamate/papajohns-v2-types';
import { IsString } from 'class-validator';


export class FoodCategoryCreateDataDto implements _FoodCategoryCreateData {
    @IsString()
    title: string;

    @IsString()
    icon: string;
}