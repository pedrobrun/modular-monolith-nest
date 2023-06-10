import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserReturn {
  @Field()
  id: string;

  @Field()
  email: string;
}
