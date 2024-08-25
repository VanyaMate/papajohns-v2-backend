import { _FoodMarkCreateData } from '@vanyamate/papajohns-v2-types';
import { IsString } from 'class-validator';


export class FoodMarkCreateDataDto implements _FoodMarkCreateData {
    @IsString()
    text: string;

    @IsString()
    color: string;
}