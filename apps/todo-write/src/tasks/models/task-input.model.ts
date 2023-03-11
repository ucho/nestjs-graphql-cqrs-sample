import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Task } from './task.model';

@ObjectType()
export class TaskCreatePayload {
  @Field(() => Task)
  task: Task;
}

@InputType()
export class TaskCreateInput {
  @Field()
  title: string;

  @Field()
  description: string;
}
