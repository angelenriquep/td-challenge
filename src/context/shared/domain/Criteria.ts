export interface filter {
  property: string
  operator: string
  value: string | number
}

export class Criteria {
  readonly filters: Array<filter>;
  readonly order?: string;
  readonly limit?: number;
  readonly offset?: number;

  constructor(filters: Array<filter>, order?: string, limit?: number, offset?: number) {
    this.filters = filters;
    this.order = order;
    this.limit = limit;
    this.offset = offset;
  }

  public hasFilters(): boolean {
    return this.filters.length > 0;
  }
}
