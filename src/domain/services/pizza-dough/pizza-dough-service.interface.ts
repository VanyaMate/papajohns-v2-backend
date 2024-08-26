import {
    _PizzaDough,
    _PizzaDoughCreateData,
    _PizzaDoughUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IPizzaDoughService {
    create (data: _PizzaDoughCreateData): Promise<_PizzaDough>;

    update (id: string, data: _PizzaDoughUpdateData): Promise<_PizzaDough>;

    remove (id: string): Promise<_PizzaDough>;

    addSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough>;

    removeSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough>;

    setSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough>;
}