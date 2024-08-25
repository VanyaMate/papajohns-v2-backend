import {
    _PizzaAdditionalUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class PizzaAdditionalUpdateDataDto implements _PizzaAdditionalUpdateData {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    icon: string;

    @IsNumber()
    @IsOptional()
    price: number;
}