import {Header} from '../Header';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';

const user = {
  name: 'User',
};

export const Layout = () => (
  <div>
    <Header user={user} />
    <TodoList>
      <TodoItem
        todo={{
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        }}
      />
    </TodoList>
  </div>
);
