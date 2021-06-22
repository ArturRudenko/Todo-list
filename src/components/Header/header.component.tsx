import type {FC} from 'react';
import {Avatar} from '../Avatar';
import styles from './header.module.scss';

interface Props {
  user: {
    name: string;
    avatar?: string;
  };
}

export const Header: FC<Props> = ({user}) => (
  <header className={styles.root}>
    <div className={styles.user}>
      <Avatar src={null} />
      <p className={styles.user__name}>{user.name}</p>
    </div>
  </header>
);
