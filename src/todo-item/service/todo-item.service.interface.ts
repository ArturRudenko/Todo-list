import type {TodoItemModel} from '../models';
import type {ITodoItemCreateFormDto} from '../components';

interface ITodoItemService {
  readonly todos: ReadonlyArray<TodoItemModel>;

  init(todos: TodoItemModel[]): Promise<void>;

  addTodo(dto: ITodoItemCreateFormDto): Promise<void>;

  toggleTodo(todoId: string): Promise<void>;

  deleteTodo(todoId: string): Promise<void>;

  editTodo(todoId: string, dto: ITodoItemCreateFormDto): Promise<void>;
}

export type {ITodoItemService};
