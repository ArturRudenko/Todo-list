import type {FC} from 'react';
import {createContext, useContext, useMemo} from 'react';
import type {Container} from 'inversify';

const InjectionContext = createContext<{container: Container | null}>({container: null});

const InjectionProvider: FC<{container: Container}> = ({container, children}) => (
  <InjectionContext.Provider value={{container}}>{children}</InjectionContext.Provider>
);

const useInjection = <T extends unknown>(identifier: symbol): T => {
  const {container} = useContext(InjectionContext);

  if (!container) {
    throw new Error('ioc container is null');
  }

  return useMemo(() => container.get<T>(identifier), [container, identifier]);
};

export {InjectionProvider, useInjection};
