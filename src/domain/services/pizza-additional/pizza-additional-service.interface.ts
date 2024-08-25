import {
    _PizzaAdditional,
    _PizzaAdditionalCreateData,
    _PizzaAdditionalUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IPizzaAdditionalService {
    create (data: _PizzaAdditionalCreateData): Promise<_PizzaAdditional>;

    update (id: string, data: _PizzaAdditionalUpdateData): Promise<_PizzaAdditional>;

    remove (id: string): Promise<_PizzaAdditional>;
}