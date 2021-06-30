import type {FC} from 'react';
import {observer} from 'mobx-react';
import {Layout} from '../../layout';
import {ItemsList} from '../../components';
import type {ITodoItemCreateFormDto, ITodoItemService} from '../../todo-item';
import {TodoForm, TodoListItem} from '../../todo-item';

interface IDashboardProps {
  todoListItemService: ITodoItemService;
}

const Dashboard: FC<IDashboardProps> = observer(({todoListItemService}) => {
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

  return (
    <Layout>
      <TodoForm onSubmit={onTodoAdd} />
      <ItemsList>{todos}</ItemsList>
    </Layout>
  );
});

export {Dashboard};
export type {IDashboardProps};
