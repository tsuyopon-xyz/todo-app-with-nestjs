import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@ApiTags('todos')
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOperation({
    summary: 'Todoの作成',
  })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Todo一覧の取得',
  })
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'IDに対応するTodo1件の取得',
  })
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'IDに対応するTodo1件の更新',
  })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'IDに対応するTodo1件の削除',
  })
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
