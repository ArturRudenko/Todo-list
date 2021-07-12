import {ContainerModule} from 'inversify';
import type {ILocalStorageService} from '../service';
import {LOCAL_STORAGE_SERVICE, LocalStorageService} from '../service';

const LocalStorageModule = new ContainerModule((bind) => {
  bind<ILocalStorageService>(LOCAL_STORAGE_SERVICE).to(LocalStorageService).inSingletonScope();
});

export {LocalStorageModule};
