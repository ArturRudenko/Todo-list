import {Dashboard} from './pages/dashboard';
import {TodoItemService} from './todo-item/service';
import {todoItemMockData} from './todo-item/todo-item.data';
import {TodoItemLocalStorageRepository} from './todo-item/repository';
import {TodoItemLocalStorageRepositoryConfig} from './todo-item/repository/config';
import {LocalStorageService} from './utils/local-storage';

const service = new TodoItemService(
  new TodoItemLocalStorageRepository(
    new TodoItemLocalStorageRepositoryConfig(),
    new LocalStorageService(),
  ),
);

service.init(todoItemMockData).catch(console.error);

const App = () => (
  <div>
    <Dashboard todoListItemService={service} />
  </div>
);

export default App;
