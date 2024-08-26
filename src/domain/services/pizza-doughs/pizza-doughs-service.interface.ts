import { _PizzaDough } from '@vanyamate/papajohns-v2-types';


export interface IPizzaDoughsService {
    getAll (): Promise<Array<_PizzaDough>>;
}