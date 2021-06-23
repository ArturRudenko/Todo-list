import type {TodoItemModel} from '../models/todo-item.model';
import type {todoItemMockData} from '../todo-item.data';

interface ITodoListService {
  readonly tasks: ReadonlyArray<TodoItemModel>;

  setupTasks(tasks: typeof todoItemMockData): void;

  addTask(queryObject: TodoItemModel): void;

  toggleTask(taskId: string): void;

  deleteTask(taskId: string): void;

  editTask(queryObject: TodoItemModel): void;
}

export type {ITodoListService};
