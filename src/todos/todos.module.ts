import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosRepository } from './todos.repository';
import { TodosController } from './todos.controller';

@Module({
  controllers: [TodosController],
  providers: [TodosService, TodosRepository],
})
export class TodosModule {}
