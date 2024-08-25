import {
    _PizzaSizeUpdateData,
} from '@vanyamate/papajohns-v2-types';
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class PizzaSizeUpdateDataDto implements _PizzaSizeUpdateData {
    @IsString()
    @IsOptional()
    size: string;

    @IsNumber()
    @IsOptional()
    multiplier: number;
}