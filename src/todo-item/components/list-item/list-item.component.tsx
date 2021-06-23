import type {FC} from 'react';

interface IListItemProps {
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}

const ListItem: FC<IListItemProps> = ({todo}) => <div>{todo.title}</div>;

export {ListItem};
export type {IListItemProps};
