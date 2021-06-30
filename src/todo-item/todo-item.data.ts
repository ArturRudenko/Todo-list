import type {TodoItemModel} from './models';
import {v4 as uuidv4} from 'uuid';

const todoItemMockData: Array<TodoItemModel> = [
  {
    id: uuidv4(),
    title: 'Lorem ipsum dolor sit',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'Consectetur adipisicing elit',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'Amet, aut, ea',
    completed: false,
  },
];

export {todoItemMockData};
