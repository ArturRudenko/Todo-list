import type {FC} from 'react';
import {observer} from 'mobx-react';
import {Layout} from '../../layout';
import {ItemsList} from '../../components';
import {TodoListItem} from '../../todo-item/components';
import type {ITodoListService} from '../../todo-item/service/service-interface';
import {TextInput} from '../../components/text-input';

interface IDashboardProps {
  todoListItemService: ITodoListService;
}

const Dashboard: FC<IDashboardProps> = observer(({todoListItemService}) => {
  const onTodoAdd = async (todoTitle: string): Promise<any> =>
    todoListItemService.addTodo(todoTitle);

  const todos = todoListItemService.todos.map(({id, title, completed}) => {
    const onTodoRemove = async (): Promise<any> => todoListItemService.deleteTodo(id);
    const onTodoToggle = async (): Promise<any> => todoListItemService.toggleTodo(id);
    const onTodoUpdate = async (newTitle: string): Promise<any> =>
      todoListItemService.editTodo(id, newTitle, completed);

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

  return (
    <Layout>
      <TextInput onSubmit={onTodoAdd} />
      <ItemsList>{todos}</ItemsList>
    </Layout>
  );
});

export {Dashboard};
export type {IDashboardProps};
