import type {ITodoItemLocalStorageRepositoryConfig} from './todo-item.local-storage.repository.config.interface';

class TodoItemLocalStorageRepositoryConfig implements ITodoItemLocalStorageRepositoryConfig {
  constructor(public readonly storageKey = 'todos') {}
}

export {TodoItemLocalStorageRepositoryConfig};
