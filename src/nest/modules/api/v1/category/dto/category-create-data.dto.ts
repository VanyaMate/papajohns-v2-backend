import {
    DomainCategoryCreateData,
    DomainCategoryType,
} from '@vanyamate/papajohns-v2-types';
import { IsNumber, IsString } from 'class-validator';


export class CategoryCreateDataDto implements DomainCategoryCreateData {
    @IsString()
    type: DomainCategoryType;

    @IsNumber()
    image: string;
}