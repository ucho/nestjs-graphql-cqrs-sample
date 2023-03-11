import { PrismaService } from '@libs/db';
import { Query, Resolver } from '@nestjs/graphql';
import { Task } from './models/task.model';

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Task])
  tasks() {
    return this.prismaService.task.findMany();
  }
}
