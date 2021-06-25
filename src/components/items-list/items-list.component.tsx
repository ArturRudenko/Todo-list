import type {FC} from 'react';
import styles from './items-list.module.scss';

const ItemsList: FC = ({children}) => <section className={styles.root}>{children}</section>;

export {ItemsList};
