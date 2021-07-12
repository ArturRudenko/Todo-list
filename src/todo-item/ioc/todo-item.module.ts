import {ContainerModule} from 'inversify';
import {LOCAL_STORAGE_SERVICE} from '../../utils/local-storage';
import type {ITodoItemLocalStorageRepositoryConfig, ITodoItemRepository} from '../repository';
import {
  TODO_ITEM_LOCAL_STORAGE_REPOSITORY,
  TODO_ITEM_LOCAL_STORAGE_REPOSITORY_CONFIG,
  TodoItemLocalStorageRepository,
  TodoItemLocalStorageRepositoryConfig,
} from '../repository';
import type {ITodoItemService} from '../service';
import {TodoItemService} from '../service';
import {TODO_ITEM_SERVICE} from '../service';

const TodoItemModule = new ContainerModule((bind, unbind, isBound) => {
  if (!isBound(LOCAL_STORAGE_SERVICE)) {
    throw new Error(LOCAL_STORAGE_SERVICE.toString() + ' is not bind ');
  }

  bind<ITodoItemLocalStorageRepositoryConfig>(TODO_ITEM_LOCAL_STORAGE_REPOSITORY_CONFIG).to(
    TodoItemLocalStorageRepositoryConfig,
  );

  bind<ITodoItemRepository>(TODO_ITEM_LOCAL_STORAGE_REPOSITORY)
    .to(TodoItemLocalStorageRepository)
    .inSingletonScope();

  bind<ITodoItemService>(TODO_ITEM_SERVICE).to(TodoItemService).inSingletonScope();
});

export {TodoItemModule};
