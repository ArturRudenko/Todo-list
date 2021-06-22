import type {FC} from 'react';

interface Props {
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
}

export const TodoItem: FC<Props> = ({todo}) => <div>{todo.title}</div>;
