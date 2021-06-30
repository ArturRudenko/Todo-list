import {makeAutoObservable} from 'mobx';
import type {TodoItemModel} from '../models';
import {TodoItemFactory} from '../models';
import type {ITodoItemService} from './todo-item.service.interface';
import type {ITodoItemRepository} from '../repository';
import type {ITodoItemCreateFormDto} from '../components';

class TodoItemService implements ITodoItemService {
  constructor(private readonly _repo: ITodoItemRepository) {
    makeAutoObservable(this);
  }

  private _todos: Array<TodoItemModel> = [];

  get todos(): ReadonlyArray<TodoItemModel> {
    return this._todos;
  }

  async addTodo(dto: ITodoItemCreateFormDto): Promise<void> {
    const todo = TodoItemFactory.fromFormCreateDto(dto);
    this._todos = [todo, ...this._todos];

    await this._repo.save(todo).catch(console.error);
  }

  async deleteTodo(todoId: string): Promise<void> {
    const idx = this._todos.findIndex((todo) => todo.id === todoId);

    if (idx) {
      this._todos.splice(idx, 1);
      const todo = this._todos[idx];
      await this._repo.remove(todo).catch(console.error);
    }
  }

  async editTodo(todoId: string, dto: ITodoItemCreateFormDto): Promise<void> {
    const idx = this.todos.findIndex((item) => item.id === todoId);

    if (idx) {
      const todo = this._todos[idx];
      const newTodo = TodoItemFactory.fromFormEditDto(dto, todo);
      this._todos.splice(idx, 1, newTodo);
      await this._repo.save(newTodo).catch(console.error);
    }
  }

  async toggleTodo(todoId: string): Promise<void> {
    const idx = this.todos.findIndex((item) => item.id === todoId);

    if (idx) {
      const todo = this._todos[idx];
      todo.completed = !todo.completed;
      this._todos.splice(idx, 1, todo);
      await this._repo.save(todo).catch(console.error);
    }
  }

  async init(todos: TodoItemModel[]): Promise<void> {
    this._todos = todos;

    await Promise.all(this._todos.map((item) => this._repo.save(item))).catch(console.error);
  }
}

export {TodoItemService};
