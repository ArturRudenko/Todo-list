import type {FC} from 'react';
import styles from './avatar.module.scss';

interface IAvatarProps {
  src: string | null;
}

const Avatar: FC<IAvatarProps> = ({src}) => (
  <div>{src ? <img src={src} alt="avatar" /> : <div className={styles.placeholder} />}</div>
);

export {Avatar};
export type {IAvatarProps};
