import {Container} from 'inversify';
import {LocalStorageModule} from '../utils/local-storage';
import {TodoItemModule} from '../todo-item';

const container = new Container();

container.load(LocalStorageModule, TodoItemModule);

export {container};
