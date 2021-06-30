import {TodoItemModel} from './todo-item.model';
import type {ITodoItemCreateFormDto} from '../components';
import {v4 as uuidv4} from 'uuid';

class TodoItemFactory {
  static fromFormCreateDto(dto: ITodoItemCreateFormDto, id = uuidv4()) {
    return new TodoItemModel(id, dto.text);
  }

  static fromFormEditDto(dto: ITodoItemCreateFormDto, todo: TodoItemModel) {
    return new TodoItemModel(todo.id, dto.text, todo.completed);
  }
}

export {TodoItemFactory};
