import { _PizzaSizeCreateData } from '@vanyamate/papajohns-v2-types';
import { IsNumber, IsString } from 'class-validator';


export class PizzaSizeCreateDataDto implements _PizzaSizeCreateData {
    @IsString()
    size: string;

    @IsNumber()
    multiplier: number;
}