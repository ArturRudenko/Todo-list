import {Layout} from './layout';
import {TodoItemService} from './todo-item/service/service';
import {todoItemMockData} from './todo-item/todo-item.data';

const service = new TodoItemService();

service.setupTasks(todoItemMockData);

const App = () => (
  <div>
    <Layout />
  </div>
);

export default App;
