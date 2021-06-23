import {Header, ItemsList} from '../components';
import {ListItem} from '../todo-item/components';

const user = {
  name: 'User',
};

const Layout = () => (
  <div>
    <Header user={user} />
    <ItemsList>
      <ListItem
        todo={{
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
        }}
      />
    </ItemsList>
  </div>
);

export {Layout};
