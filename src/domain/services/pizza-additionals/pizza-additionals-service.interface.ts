import { _PizzaAdditional } from '@vanyamate/papajohns-v2-types';


export interface IPizzaAdditionalsService {
    getAll (): Promise<Array<_PizzaAdditional>>;
}