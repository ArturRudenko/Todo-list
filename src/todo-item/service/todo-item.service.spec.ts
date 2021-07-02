import {TodoItemService} from './todo-item.service';
import {mock} from 'jest-mock-extended';
import type {ITodoItemRepository} from '../repository';
import {todoItemMockData} from '../todo-item.data';

describe('TodoItemService', () => {
  describe('constructor', () => {
    it('should create new instance', () => {
      expect(new TodoItemService(mock<ITodoItemRepository>())).toBeInstanceOf(TodoItemService);
    });
  });
  describe('init', () => {
    it('should add first data to todos', async () => {
      const service = new TodoItemService(
        mock<ITodoItemRepository>({
          async list() {
            return [];
          },
          async save() {},
        }),
      );
      await service.init(todoItemMockData);
      expect(service.todos).toEqual(todoItemMockData);
    });

    it('should catch repo list error', async () => {
      const service = new TodoItemService(
        mock<ITodoItemRepository>({
          async list() {
            throw new Error();
          },
          async save() {},
        }),
      );
      await service.init(todoItemMockData);
      expect(service.todos).toEqual(todoItemMockData);
    });

    it('should restore data from storage', async () => {
      const service = new TodoItemService(
        mock<ITodoItemRepository>({
          async list() {
            return todoItemMockData;
          },
          async save() {},
        }),
      );
      await service.init([]);
      expect(service.todos).toEqual(todoItemMockData);
    });
  });
});
