import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class CompanyType {
  @Field(() => ID)
  readonly id?: string;
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