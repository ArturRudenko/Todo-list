import type {FC} from 'react';
import {Header} from '../components';

const Layout: FC = ({children}) => {
  return (
    <>
      <Header name={'user'} />
      {children}
    </>
  );
};

export {Layout};
