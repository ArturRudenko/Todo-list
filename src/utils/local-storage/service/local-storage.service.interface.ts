interface ILocalStorageService {
  get(key: string): string | null;

  set(key: string, value: string): void;

  delete(key: string): void;

  clear(): void;

  getObject<T>(key: string): T | null;

  setObject<T>(key: string, value: T): void;
}

export type {ILocalStorageService};
