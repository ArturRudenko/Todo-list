import {makeAutoObservable} from 'mobx';
import type {TodoItemModel} from '../models/todo-item.model';
import type {todoItemMockData} from '../todo-item.data';
import type {ITodoListService} from './service-interface';

class TodoItemService implements ITodoListService {
  private _tasks: Array<TodoItemModel> = [];

  get tasks(): Array<TodoItemModel> {
    return this._tasks;
  }

  set tasks(value: Array<TodoItemModel>) {
    this._tasks = value;
  }

  constructor() {
    makeAutoObservable(this);
  }

  setupTasks(tasks: typeof todoItemMockData): void {
    this.tasks.splice(0, this.tasks.length, ...tasks);
  }

  addTask(queryObject: TodoItemModel): void {
    console.log(queryObject);
  }

  deleteTask(taskId: string): void {
    console.log(taskId);
  }

  editTask(queryObject: TodoItemModel): void {
    console.log(queryObject);
  }

  toggleTask(taskId: string): void {
    console.log(taskId);
  }
}

export {TodoItemService};
