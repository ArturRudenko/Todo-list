import type {IRepository} from '../../types';
import type {TodoItemModel} from '../models';

type ITodoItemRepositoryQuery = {id: string; title: string; completed: boolean};

type ITodoItemRepository = IRepository<TodoItemModel, ITodoItemRepositoryQuery>;

export type {ITodoItemRepository, ITodoItemRepositoryQuery};
