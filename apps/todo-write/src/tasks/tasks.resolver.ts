import { PrismaService } from '@libs/db';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskCreateInput, TaskCreatePayload } from './models/task-input.model';
import { Task } from './models/task.model';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => Task)
  task(@Args('id') id: string) {
    return this.prismaService.task.findUnique({ where: { id } });
  }

  @Mutation(() => TaskCreatePayload)
  async createTask(@Args('input') input: TaskCreateInput) {
    const result = await this.prismaService.task.create({
      data: { ...input, done: false },
    });
    return {
      task: result,
    } satisfies TaskCreatePayload;
  }
}
