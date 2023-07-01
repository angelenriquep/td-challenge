export class Criteria {
  readonly filters: [];
  readonly order: string;
  readonly limit?: number;
  readonly offset?: number;

  constructor(filters: [], order: string, limit?: number, offset?: number) {
    this.filters = filters;
    this.order = order;
    this.limit = limit;
    this.offset = offset;
  }

  public hasFilters(): boolean {
    return this.filters.length > 0;
  }
}
