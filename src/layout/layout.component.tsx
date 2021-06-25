import {Header, ItemsList} from '../components';
import {TodoListItem} from '../todo-item/components';
import type {ITodoListService} from '../todo-item/service/service-interface';
import type {FC} from 'react';
import {observer} from 'mobx-react';
import {TextInput} from '../components/text-input';

interface ILayoutProps {
  todoListItemService: ITodoListService;
}

const Layout: FC<ILayoutProps> = observer(({todoListItemService}) => {
  const onTaskAdd = (taskText: string): void => todoListItemService.addTask(taskText);
  const onTaskRemove = (id: string): void => todoListItemService.deleteTask(id);
  const onTaskToggle = (id: string): void => todoListItemService.toggleTask(id);
  const onTaskUpdate = (newTitle: string, id: string, completed: boolean): void => {
    todoListItemService.editTask({
      id,
      title: newTitle,
      completed,
    });
  };

  return (
    <div>
      <Header name={'user'} />
      <TextInput onSubmit={onTaskAdd} />
      <ItemsList>
        {todoListItemService.tasks.map(({id, title, completed}) => (
          <TodoListItem
            key={id + title}
            title={title}
            completed={completed}
            onToggle={() => onTaskToggle(id)}
            onRemove={() => onTaskRemove(id)}
            onUpdate={(newTitle) => onTaskUpdate(newTitle, id, completed)}
          />
        ))}
      </ItemsList>
    </div>
  );
});

export {Layout};
export type {ILayoutProps};
