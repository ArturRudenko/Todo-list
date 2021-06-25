import type {FC} from 'react';
import {useState} from 'react';
import {TextInput} from '../../../components/text-input';

interface ITodoListItemProps {
  title: string;
  completed: boolean;

  onToggle(): void;

  onRemove(): void;

  onUpdate(newTitle: string): void;
}

const TodoListItem: FC<ITodoListItemProps> = ({title, completed, onToggle, onRemove, onUpdate}) => {
  const [isEditing, setEditing] = useState(false);

  const onTodoUpdate = (newTitle: string): void => {
    onUpdate(newTitle);
    setEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      {isEditing ? (
        <TextInput onSubmit={onTodoUpdate} defaultValue={title} />
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
