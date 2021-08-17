import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosRepository {
  private todos: Todo[] = [
    new Todo('買い物', '帰りにスーパーに寄る'),
    new Todo('本屋', 'TypeScriptの本を買う'),
    new Todo('勉強', 'TypeScriptの勉強をする'),
  ];

  async findOne(id: number): Promise<Todo> {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new NotFoundException('todo not found');
    }

    return todo;
  }

  async findAll(): Promise<Todo[]> {
    return this.todos;
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const newTodo = new Todo(createTodoDto.title, createTodoDto.body);
    this.todos.push(newTodo);

    return newTodo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.findOne(id);
    if (updateTodoDto.title) {
      todo.title = updateTodoDto.title;
    }
    if (updateTodoDto.body) {
      todo.body = updateTodoDto.body;
    }

    return todo;
  }

  async remove(id: number): Promise<Todo> {
    const todo = await this.findOne(id);
    const newTodos = this.todos.filter((_todo) => todo !== _todo);
    this.todos = newTodos;

    return todo;
  }
}
