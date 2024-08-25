import {
    _FoodMarkUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { IsString } from 'class-validator';
import { Optional } from '@nestjs/common';


export class FoodMarkUpdateDataDto implements _FoodMarkUpdateData {
    @IsString()
    @Optional()
    text: string;

    @IsString()
    @Optional()
    color: string;
}