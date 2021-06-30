import type {FC} from 'react';
import {useState} from 'react';
import type {ITodoItemCreateFormDto} from '../todo-form';
import {TodoForm} from '../todo-form';

interface ITodoListItemProps {
  title: string;
  completed: boolean;

  onToggle(): void;

  onRemove(): void;

  onUpdate(dto: ITodoItemCreateFormDto): void;
}

const TodoListItem: FC<ITodoListItemProps> = ({title, completed, onToggle, onRemove, onUpdate}) => {
  const [isEditing, setEditing] = useState(false);

  const onTodoUpdate = (dto: ITodoItemCreateFormDto): void => {
    onUpdate(dto);
    setEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      {isEditing ? (
        <TodoForm onSubmit={onTodoUpdate} defaultValue={title} />
      ) : (
        <p onClick={() => setEditing(true)}>{title}</p>
      )}
      <button style={{marginLeft: 10 + 'px'}} onClick={onRemove}>
        |rm|
      </button>
    </div>
  );
};

export {TodoListItem};
export type {ITodoListItemProps};
