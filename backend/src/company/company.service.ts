import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyType } from './dto/create-company.dto';
import { Company } from './interfaces/company.interface';
import { CompanyInput } from './input-company.input';

@Injectable()
export class CompanyService {
  constructor(@InjectModel('Company') private companyModel: Model<Company>) {}

  async create(createCompanyDto: CompanyInput): Promise<CompanyType> {
    const createdCompany = new this.companyModel(createCompanyDto);
    return await createdCompany.save();
  }

  async findAll(): Promise<CompanyType[]> {
    return await this.companyModel.find().exec();
  }

  async findOne(id: string): Promise<CompanyType> {
    return await this.companyModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<CompanyType> {
    return await this.companyModel.findByIdAndRemove(id);
  }

  async update(id: string, company: Company): Promise<CompanyType> {
    return await this.companyModel.findByIdAndUpdate(id, company, { new: true });
  }
}
