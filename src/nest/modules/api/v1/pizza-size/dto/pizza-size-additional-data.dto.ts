import { IsArray, IsString } from 'class-validator';


export class PizzaSizeAdditionalDataDto {
    @IsArray()
    @IsString({ each: true })
    ids: Array<string>;
}