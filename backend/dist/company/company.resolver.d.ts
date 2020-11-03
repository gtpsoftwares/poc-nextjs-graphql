import { CompanyService } from './company.service';
import { CompanyType } from './dto/create-company.dto';
import { CompanyInput } from './input-company.input';
export declare class CompanyResolver {
    private readonly CompanyService;
    constructor(CompanyService: CompanyService);
    Company(): Promise<CompanyType[]>;
    createCompany(input: CompanyInput): Promise<CompanyInput>;
    deleteCompany(id: string): Promise<CompanyInput>;
    hello(): Promise<string>;
}
