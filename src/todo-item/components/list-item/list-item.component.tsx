import type {FC} from 'react';

interface ITodoListItemProps {
  title: string;
}

const TodoListItem: FC<ITodoListItemProps> = ({title}) => <div>{title}</div>;

export {ListItem};
export type {IListItemProps};
