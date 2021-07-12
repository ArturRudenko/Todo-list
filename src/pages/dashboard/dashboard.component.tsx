import type {FC} from 'react';
import {observer} from 'mobx-react';
import {Layout} from '../../layout';
import {ItemsList} from '../../components';
import type {ITodoItemCreateFormDto, ITodoItemService} from '../../todo-item';
import {TODO_ITEM_SERVICE, TodoForm, TodoListItem} from '../../todo-item';
import {useInjection} from '../../ioc/ioc.provider';
import {useEffect, useState} from 'react';
import {todoItemMockData} from '../../todo-item/todo-item.data';

interface IDashboardProps {
  todoListItemService: ITodoItemService;
}

const Dashboard: FC<IDashboardProps> = observer(({todoListItemService}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const onTodoAdd = (dto: ITodoItemCreateFormDto) => todoListItemService.addTodo(dto);

  const todos = todoListItemService.todos.map(({id, title, completed}) => {
    const onTodoRemove = () => todoListItemService.deleteTodo(id);
    const onTodoToggle = () => todoListItemService.toggleTodo(id);
    const onTodoUpdate = (dto: ITodoItemCreateFormDto) => todoListItemService.editTodo(id, dto);

    return (
      <TodoListItem
        key={id}
        title={title}
        completed={completed}
        onToggle={onTodoToggle}
        onRemove={onTodoRemove}
        onUpdate={onTodoUpdate}
      />
    );
  });

  useEffect(() => {
    if (!isInitialized) {
      todoListItemService
        .init(todoItemMockData)
        .then(() => setIsInitialized(true))
        .catch(console.error);
    }
  }, [isInitialized, todoListItemService]);

  return (
    <Layout>
      <TodoForm onSubmit={onTodoAdd} />
      <ItemsList>{todos}</ItemsList>
    </Layout>
  );
});

const DashboardInjected: FC = (props) => (
  <Dashboard {...props} todoListItemService={useInjection(TODO_ITEM_SERVICE)} />
);

export {Dashboard, DashboardInjected};
export type {IDashboardProps};
