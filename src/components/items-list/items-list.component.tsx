import type {FC, ReactNode} from 'react';
import styles from './items-list.module.scss';

const ItemsList: FC<{children: ReactNode}> = ({children}) => (
  <article className={styles.root}>{children}</article>
);

export {ItemsList};