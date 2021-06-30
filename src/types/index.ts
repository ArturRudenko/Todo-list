interface IRepository<Model, Query extends Record<string, unknown>, Returns = void> {
  save(domain: Model): Promise<Returns>;

  remove(domain: Model): Promise<void>;

  find(query?: Partial<Query>): Promise<Model | null>;

  list(query?: Partial<Query>): Promise<Model[]>;
}

export type {IRepository};
