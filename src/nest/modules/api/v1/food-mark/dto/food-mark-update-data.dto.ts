import {
    _FoodMarkUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { IsOptional, IsString } from 'class-validator';


export class FoodMarkUpdateDataDto implements _FoodMarkUpdateData {
    @IsString()
    @IsOptional()
    text: string;

    @IsString()
    @IsOptional()
    color: string;
}