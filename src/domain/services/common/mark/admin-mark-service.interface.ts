import {
    DomainAdminResponseMark, DomainAdminResponseMarks, DomainMark,
    DomainMarkCreateData, DomainMarkUpdateData,
} from '@vanyamate/papajohns-v2-types';


export interface IAdminMarkService {
    create (data: DomainMarkCreateData): Promise<DomainAdminResponseMark>;

    update (id: string, data: DomainMarkUpdateData): Promise<DomainMark>;

    remove (id: string): Promise<DomainMark>;

    getAllWithCounts (): Promise<DomainAdminResponseMarks>;

    getOneFull (id: string): Promise<DomainAdminResponseMark>;
}