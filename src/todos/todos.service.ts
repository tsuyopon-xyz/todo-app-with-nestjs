import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(private todosRepository: TodosRepository) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todosRepository.create(createTodoDto);
  }

  findAll() {
    return this.todosRepository.findAll();
  }

  findOne(id: number) {
    return this.todosRepository.findOne(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todosRepository.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todosRepository.remove(id);
  }
}
