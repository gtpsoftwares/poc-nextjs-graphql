import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CompanyType } from './dto/create-company.dto';
import { CompanyInput } from './input-company.input';

@Resolver()
export class CompanyResolver {
  constructor(private readonly CompanyService: CompanyService) {}

  @Query(() => [CompanyType])
  async Company(): Promise<CompanyType[]> {
    return this.CompanyService.findAll();
  }

  @Mutation(() => CompanyType)
  async createCompany(@Args('input') input: CompanyInput): Promise<CompanyInput> {
    return this.CompanyService.create(input);
  }

//   @Mutation(() => CompanyType)
//   async updateCompany(
//     @Args('id') id: string, @Args('input') input: CompanyInput): Promise<CompanyInput> {
//     return this.CompanyService.update(id, input);
//   }

  @Mutation(() => CompanyType)
  async deleteCompany(@Args('id') id: string): Promise<CompanyInput> {
    return this.CompanyService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}

