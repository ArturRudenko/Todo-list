import type {FC, ReactNode} from 'react';
import styles from './todolist.module.scss';

export const TodoList: FC<{children: ReactNode}> = ({children}) => (
  <article className={styles.root}>{children}</article>
);
