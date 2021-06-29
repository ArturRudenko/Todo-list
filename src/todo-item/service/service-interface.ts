import type {TodoItemModel} from '../models/todo-item.model';

interface ITodoListService {
  readonly todos: ReadonlyArray<TodoItemModel>;

  addTodo(todoTitle: string): Promise<any>;

  toggleTodo(todoId: string): Promise<any>;

  deleteTodo(todoId: string): Promise<any>;

  editTodo(todoId: string, todoTitle: string, todoCompleted: boolean): Promise<any>;
}

export type {ITodoListService};
