import {Dashboard} from './pages/dashboard';
import {InjectionProvider} from './ioc/ioc.provider';
import {container} from './ioc/container';

const App = () => (
  <InjectionProvider container={container}>
    <Dashboard />
  </InjectionProvider>
);

export default App;
