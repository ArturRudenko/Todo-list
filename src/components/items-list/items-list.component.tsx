import type {FC} from 'react';
import styles from './items-list.module.scss';

const ItemsList: FC = ({children}) => <article className={styles.root}>{children}</article>;

export {ItemsList};
