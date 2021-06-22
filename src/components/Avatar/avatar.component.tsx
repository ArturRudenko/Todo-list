import type {FC} from 'react';
import styles from './avatar.module.scss';

interface Props {
  src: string | null;
}

export const Avatar: FC<Props> = ({src}) => (
  <div>{src ? <img src={src} alt="avatar" /> : <div className={styles.placeholder} />}</div>
);
