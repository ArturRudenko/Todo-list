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

  describe('addTodo', () => {
    it('should add todo to todos array', async () => {
      const service = new TodoItemService(
        mock<ITodoItemRepository>({
          async save() {},
        }),
      );
      const initialTodosNumber = service.todos.length;

      await service.addTodo({text: 'todo'});
      expect(service.todos.length).toBeGreaterThan(initialTodosNumber);
    });
  });

  describe('deleteTodo', () => {
    it('should remove todo from todos array', async () => {
      const service = new TodoItemService(
        mock<ITodoItemRepository>({
          async list() {
            return todoItemMockData;
          },
          async remove() {},
        }),
      );

      await service.init([]);
      const mockTodo = service.todos[0];
      await service.deleteTodo(mockTodo.id);
      expect(service.todos[0].id).not.toMatch(mockTodo.id);
    });
  });

  describe('editTodo', () => {
    it('should edit todo title', async () => {
      const service = new TodoItemService(
        mock<ITodoItemRepository>({
          async list() {
            return todoItemMockData;
          },
          async save() {},
        }),
      );

      await service.init([]);
      const mockTodo = service.todos[0];
      await service.editTodo(mockTodo.id, {text: 'new title'});
      expect(service.todos[0].title).not.toMatch(mockTodo.title);
    });
  });

  describe('toggleTodo', () => {
    it('should change todo completed', async () => {
      const service = new TodoItemService(
        mock<ITodoItemRepository>({
          async list() {
            return todoItemMockData;
          },
          async save() {},
        }),
      );

      await service.init([]);
      const mockTodo = service.todos[0];
      await service.toggleTodo(mockTodo.id);
      expect(service.todos[0].completed).toBe(mockTodo.completed);
    });
  });
});
