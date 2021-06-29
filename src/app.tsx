import {Dashboard} from './pages/dashboard';
import {TodoItemService} from './todo-item/service/service';
import {todoItemMockData} from './todo-item/todo-item.data';

const service = new TodoItemService();

service.todos = todoItemMockData;

const App = () => (
  <div>
    <Dashboard todoListItemService={service} />
  </div>
);

export default App;
