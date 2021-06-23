import {Header, ItemsList} from '../components';
import {TodoListItem} from '../todo-item/components';

const user = {
  name: 'User',
};

const Layout = () => (
  <div>
    <Header user={user} />
    <ItemsList>
      <TodoListItem title={'delectus aut autem'} />
    </ItemsList>
  </div>
);

export {Layout};
