import type {ITodoItemRepository, ITodoItemRepositoryQuery} from './todo-item.repository.interface';
import type {TodoItemModel} from '../models';
import type {ILocalStorageService} from '../../utils/local-storage';
import type {ITodoItemLocalStorageRepositoryConfig} from './config';

class TodoItemLocalStorageRepository implements ITodoItemRepository {
  constructor(
    private readonly _config: ITodoItemLocalStorageRepositoryConfig,
    private readonly _localStorage: ILocalStorageService,
  ) {}

  async save(todo: TodoItemModel): Promise<void> {
    const {storageKey} = this._config;
    const todos = this._localStorage.getObject<TodoItemModel[]>(storageKey);

    if (todos) {
      this._localStorage.setObject<TodoItemModel[]>(storageKey, [...todos, todo]);
    } else {
      this._localStorage.setObject<TodoItemModel[]>(storageKey, [todo]);
    }
  }

  async remove(todo: TodoItemModel): Promise<void> {
    const {storageKey} = this._config;
    const todos = this._localStorage.getObject<TodoItemModel[]>(storageKey);

    if (todos) {
      this._localStorage.setObject<TodoItemModel[]>(
        storageKey,
        todos.filter((item) => item.id !== todo.id),
      );
    }
  }

  async find(query?: Partial<ITodoItemRepositoryQuery>): Promise<TodoItemModel> {
    const [todo] = await this.list(query);

    return todo;
  }

  async list(query?: Partial<ITodoItemRepositoryQuery>): Promise<TodoItemModel[]> {
    const {storageKey} = this._config;
    const todos = this._localStorage.getObject<TodoItemModel[]>(storageKey);

    return (
      todos?.filter(
        (item) =>
          !(
            (!!query?.id && query.id !== item.id) ||
            (!!query?.title && query.title !== item.title) ||
            (query?.completed !== undefined && query.completed !== item.completed)
          ),
      ) ?? []
    );
  }
}

export {TodoItemLocalStorageRepository};
