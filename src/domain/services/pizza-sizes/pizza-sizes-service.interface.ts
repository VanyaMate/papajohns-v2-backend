import { _PizzaSize } from '@vanyamate/papajohns-v2-types';


export interface IPizzaSizesService {
    getAll (): Promise<Array<_PizzaSize>>;
}