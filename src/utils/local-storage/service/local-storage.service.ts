import type {ILocalStorageService} from './local-storage.service.interface';

class LocalStorageService implements ILocalStorageService {
  clear(): void {
    localStorage.clear();
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getObject<T>(key: string): T | null {
    const str = this.get(key);

    return !str ? str : JSON.parse(str);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  setObject<T>(key: string, value: T): void {
    const str = JSON.stringify(value);

    this.set(key, str);
  }
}

export {LocalStorageService};
