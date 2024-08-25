import {
    _FoodCategoryUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { IsOptional, IsString } from 'class-validator';


export class FoodCategoryUpdateDataDto implements _FoodCategoryUpdateData {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    icon: string;
}