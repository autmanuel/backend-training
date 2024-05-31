import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export enum Priority {
  LOW,
  MIDDLE,
  HIGH,
}

@Schema()
export class TodoModel {
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop({ required: false })
  image?: string;
  @Prop({ type: Number })
  priority: Priority;
}
export const TodoSchema = SchemaFactory.createForClass(TodoModel);
export const TODO_SCHEMA_TOKEN = 'Todos';
