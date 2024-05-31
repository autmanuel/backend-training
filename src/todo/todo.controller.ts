import { Controller, Get } from '@nestjs/common';
import { Priority } from './todo.model';
import { TodoService } from './todo.service';

interface TodoElement {
  title: string;
  content: string;
  image: string;
  priority: Priority;
}

const data: TodoElement[] = [
  { title: 'high', content: 'high hgig', image: '', priority: 2 },
  {
    title: 'qwdqwdqwwqdqwdqdw',
    content: 'qwdqwd',
    image: '',
    priority: 2,
  },
  { title: 'medium', content: 'wefwefwe', image: '', priority: 1 },
  {
    title: 'qwdwqdqdw',
    content: 'qwdqwd',
    image: '',
    priority: 1,
  },
  { title: 'Test task', content: 'Test test test', image: '', priority: 0 },
  {
    title: 'wqdw',
    content: 'wqwdwq',
    image: '',
    priority: 0,
  },
];
@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get('all')
  test() {
    return data;
  }

  @Get('add-to-db')
  async addToDb() {
    const model = await this.todoService.todoModel.create({
      title: 'Test Todo 2',
      content: 'THis is a test todo',
      image: '',
      priority: Priority.HIGH,
    });
    return model;
  }
}
