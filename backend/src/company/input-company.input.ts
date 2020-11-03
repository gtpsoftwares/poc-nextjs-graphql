import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
  @Field()
  readonly companyname: string;
  @Field()
  readonly personname: string;
  @Field(() => Int)
  readonly phone: number;
  @Field()
  readonly address: string;
  @Field()
  readonly industry: string;
  @Field()
  readonly location: string;
}