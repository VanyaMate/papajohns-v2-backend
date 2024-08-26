import {
    IPizzaDoughService,
} from '@/domain/services/pizza-dough/pizza-dough-service.interface';
import { PrismaClient } from '@prisma/client';
import {
    _PizzaDoughCreateData,
    _PizzaDough,
    _PizzaDoughUpdateData,
} from '@vanyamate/papajohns-v2-types';


export class PrismaPizzaDoughService implements IPizzaDoughService {
    constructor (private readonly _prisma: PrismaClient) {
    }

    async create (data: _PizzaDoughCreateData): Promise<_PizzaDough> {
        throw new Error('Method not implemented.');
    }

    async update (id: string, data: _PizzaDoughUpdateData): Promise<_PizzaDough> {
        throw new Error('Method not implemented.');
    }

    async remove (id: string): Promise<_PizzaDough> {
        throw new Error('Method not implemented.');
    }

    async addSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough> {
        throw new Error('Method not implemented.');
    }

    async removeSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough> {
        throw new Error('Method not implemented.');
    }

    async setSize (id: string, sizeIds: Array<string>): Promise<_PizzaDough> {
        throw new Error('Method not implemented.');
    }
}