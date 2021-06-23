import type {FC} from 'react';

interface ITodoListItemProps {
  title: string;
}

const TodoListItem: FC<ITodoListItemProps> = ({title}) => <div>{title}</div>;

export {TodoListItem};
export type {ITodoListItemProps};
