import {TodoItemModel} from './todo-item.model';

class TodoItemFactory {
  create(id: string, title: string, completed: boolean) {
    return new TodoItemModel(id, title, completed);
  }
}

export {TodoItemFactory};
