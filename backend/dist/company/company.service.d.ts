import { Model } from 'mongoose';
import { CompanyType } from './dto/create-company.dto';
import { Company } from './interfaces/company.interface';
import { CompanyInput } from './input-company.input';
export declare class CompanyService {
    private companyModel;
    constructor(companyModel: Model<Company>);
    create(createCompanyDto: CompanyInput): Promise<CompanyType>;
    findAll(): Promise<CompanyType[]>;
    findOne(id: string): Promise<CompanyType>;
    delete(id: string): Promise<CompanyType>;
    update(id: string, company: Company): Promise<CompanyType>;
}
