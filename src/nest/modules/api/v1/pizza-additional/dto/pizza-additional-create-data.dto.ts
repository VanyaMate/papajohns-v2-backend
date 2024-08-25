import { _PizzaAdditionalCreateData } from '@vanyamate/papajohns-v2-types';
import { IsNumber, IsString } from 'class-validator';


export class PizzaAdditionalCreateDataDto implements _PizzaAdditionalCreateData {
    @IsString()
    title: string;

    @IsString()
    icon: string;

    @IsNumber()
    price: number;
}