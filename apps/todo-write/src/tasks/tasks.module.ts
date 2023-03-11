import { PrismaService } from '@libs/db';
import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';

@Module({
  providers: [TasksResolver, PrismaService],
})
export class TasksModule {}
