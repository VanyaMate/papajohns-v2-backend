import {
    _Pizza,
    _PizzaCreateData,
    _PizzaUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IPizzaService {
    create (data: _PizzaCreateData): Promise<_Pizza>;

    update (id: string, data: _PizzaUpdateData): Promise<_Pizza>;

    remove (id: string): Promise<_Pizza>;

    setMark (id: string, markId: string): Promise<_Pizza>;

    removeMark (id: string): Promise<_Pizza>;

    addAdditional (id: string, additionalId: string): Promise<_Pizza>;

    removeAdditional (id: string, additionalId: string): Promise<_Pizza>;

    addDough (id: string, doughId: string): Promise<_Pizza>;

    removeDough (id: string, doughId: string): Promise<_Pizza>;

    addSize (id: string, sizeId: string): Promise<_Pizza>;

    removeSize (id: string, sizeId: string): Promise<_Pizza>;
}