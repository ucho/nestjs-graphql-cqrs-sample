import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GraphQLBoolean as Boolean } from 'graphql';

@ObjectType()
export class Task {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Boolean)
  done: boolean;
}
