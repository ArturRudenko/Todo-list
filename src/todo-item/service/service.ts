import {makeAutoObservable} from 'mobx';
import type {TodoItemModel} from '../models/todo-item.model';
import type {ITodoListService} from './service-interface';
import {v4 as uuidv4} from 'uuid';

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

  addTask(taskText: string): void {
    this.tasks.push({
      id: uuidv4(),
      title: taskText,
      completed: false,
    });
  }

  deleteTask(taskId: string): void {
    const idx = this.tasks.findIndex((task) => task.id === taskId);

    this.tasks.splice(idx, 1);
  }

  editTask(task: TodoItemModel): void {
    const idx = this.tasks.findIndex((item) => item.id === task.id);

    this.tasks.splice(idx, 1, task);
  }

  toggleTask(taskId: string): void {
    this.tasks.splice(
      0,
      this.tasks.length,
      ...this.tasks.map((task) => {
        if (task.id !== taskId) {
          return task;
        } else {
          return {
            id: task.id,
            title: task.title,
            completed: !task.completed,
          };
        }
      }),
    );
  }
}

export {TodoItemService};
