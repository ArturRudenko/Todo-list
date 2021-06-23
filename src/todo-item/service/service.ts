import {makeAutoObservable} from 'mobx';
import type {TodoItemModel} from '../models/todo-item.model';
import type {todoItemMockData} from '../todo-item.data';
import type {ITodoListService} from './service-interface';

class TodoItemService implements ITodoListService {
  tasks: ReadonlyArray<TodoItemModel>;

  constructor() {
    makeAutoObservable(this);
    this.tasks = [];
  }

  setupTasks(tasks: typeof todoItemMockData): void {
    this.tasks = tasks;
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
