import {makeAutoObservable} from 'mobx';
import {v4 as uuidv4} from 'uuid';
import type {TodoItemModel} from '../models/todo-item.model';
import type {ITodoListService} from './service-interface';
import {TodoItemFactory} from '../models/todo-item.factory';

const todoFactory = new TodoItemFactory();

class TodoItemService implements ITodoListService {
  private _todos: Array<TodoItemModel> = [];

  get todos(): Array<TodoItemModel> {
    return this._todos;
  }

  set todos(value: Array<TodoItemModel>) {
    this._todos = value;
  }

  constructor() {
    makeAutoObservable(this);
  }

  async addTodo(todoTitle: string): Promise<any> {
    this.todos.push(todoFactory.create(uuidv4(), todoTitle, false));
  }

  async deleteTodo(todoId: string): Promise<any> {
    const idx = this.todos.findIndex((todo) => todo.id === todoId);

    this.todos.splice(idx, 1);
  }

  async editTodo(todoId: string, todoTitle: string, todoCompleted: boolean): Promise<any> {
    const idx = this.todos.findIndex((item) => item.id === todoId);

    this.todos.splice(idx, 1, todoFactory.create(todoId, todoTitle, todoCompleted));
  }

  async toggleTodo(todoId: string): Promise<any> {
    this.todos.splice(
      0,
      this.todos.length,
      ...this.todos.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          return todoFactory.create(todo.id, todo.title, !todo.completed);
        }
      }),
    );
  }
}

export {TodoItemService};
