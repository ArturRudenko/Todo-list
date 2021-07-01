import type {ILocalStorageService} from './local-storage.service.interface';

class LocalStorageService implements ILocalStorageService {
  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getObject<T>(key: string): T | null {
    const str = this.get(key);

    return !str ? str : JSON.parse(str);
  }

  setObject<T>(key: string, value: T): void {
    const str = JSON.stringify(value);

    this.set(key, str);
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}

export {LocalStorageService};
