import {makeAutoObservable} from 'mobx';
import type {TodoItemModel} from '../models';
import {TodoItemFactory} from '../models';
import type {ITodoItemService} from './todo-item.service.interface';
import type {ITodoItemRepository} from '../repository';
import type {ITodoItemCreateFormDto} from '../components';
import {inject, injectable} from 'inversify';
import {TODO_ITEM_LOCAL_STORAGE_REPOSITORY} from '../repository';

@injectable()
class TodoItemService implements ITodoItemService {
  private _todos: Array<TodoItemModel> = [];

  get todos(): ReadonlyArray<TodoItemModel> {
    return this._todos;
  }

  constructor(
    @inject(TODO_ITEM_LOCAL_STORAGE_REPOSITORY) private readonly _repo: ITodoItemRepository,
  ) {
    makeAutoObservable(this);
  }

  async init(todos: TodoItemModel[]): Promise<void> {
    const storageTodos = await this._repo.list().catch(console.error);

    if (!storageTodos?.length) {
      this._todos = todos;
      await Promise.all(this._todos.map((item) => this._repo.save(item))).catch(console.error);
    } else {
      this._todos = storageTodos;
    }
  }

  async addTodo(dto: ITodoItemCreateFormDto): Promise<void> {
    const todo = TodoItemFactory.fromFormCreateDto(dto);
    this._todos = [...this._todos, todo];

    await this._repo.save(todo).catch(console.error);
  }

  async deleteTodo(todoId: string): Promise<void> {
    const idx = this._todos.findIndex((todo) => todo.id === todoId);

    if (isFinite(idx) && idx !== -1) {
      const todo = this._todos[idx];
      this._todos.splice(idx, 1);
      await this._repo.remove(todo).catch(console.error);
    }
  }

  async editTodo(todoId: string, dto: ITodoItemCreateFormDto): Promise<void> {
    const idx = this.todos.findIndex((item) => item.id === todoId);

    if (isFinite(idx) && idx !== -1) {
      const todo = this._todos[idx];
      const newTodo = TodoItemFactory.fromFormEditDto(dto, todo);
      this._todos.splice(idx, 1, newTodo);
      await this._repo.save(newTodo).catch(console.error);
    }
  }

  async toggleTodo(todoId: string): Promise<void> {
    const idx = this._todos.findIndex((item) => item.id === todoId);

    if (isFinite(idx) && idx !== -1) {
      const todo = this._todos[idx];
      todo.completed = !todo.completed;
      this._todos.splice(idx, 1, todo);
      await this._repo.save(todo).catch(console.error);
    }
  }
}

export {TodoItemService};
