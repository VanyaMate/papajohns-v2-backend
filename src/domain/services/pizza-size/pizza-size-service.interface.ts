import {
    _PizzaSize,
    _PizzaSizeCreateData,
    _PizzaSizeUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IPizzaSizeService {
    create (data: _PizzaSizeCreateData): Promise<_PizzaSize>;

    update (id: string, data: _PizzaSizeUpdateData): Promise<_PizzaSize>;

    remove (id: string): Promise<_PizzaSize>;

    addAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize>;

    removeAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize>;

    setAdditional (id: string, additionalIds: Array<string>): Promise<_PizzaSize>;
}