import type {TodoItemModel} from '../models/todo-item.model';

interface ITodoListService {
  readonly tasks: ReadonlyArray<TodoItemModel>;

  addTask(taskText: string): void;

  toggleTask(taskId: string): void;

  deleteTask(taskId: string): void;

  editTask(task: TodoItemModel): void;
}

export type {ITodoListService};
