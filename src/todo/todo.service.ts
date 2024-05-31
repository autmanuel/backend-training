import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TODO_SCHEMA_TOKEN, TodoModel } from './todo.model';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TODO_SCHEMA_TOKEN) public todoModel: Model<TodoModel>,
  ) {}
}
