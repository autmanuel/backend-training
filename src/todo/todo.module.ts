import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TODO_SCHEMA_TOKEN, TodoSchema } from './todo.model';
import { TodoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TODO_SCHEMA_TOKEN, schema: TodoSchema },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
