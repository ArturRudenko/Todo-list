import type {FC} from 'react';
import {Avatar} from '../avatar';
import styles from './header.module.scss';

interface IHeaderProps {
  name: string;
  avatar?: string;
}

const Header: FC<IHeaderProps> = ({name}) => (
  <header className={styles.root}>
    <div className={styles.user}>
      <Avatar src={null} />
      <p className={styles.userName}>{name}</p>
    </div>
  </header>
);

export {Header};
export type {IHeaderProps};
