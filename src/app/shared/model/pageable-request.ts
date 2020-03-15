import { DEFAULT_PAGE_SIZE } from 'src/app/config/paginator.config';

export class PageableRequest {
  filter: string;
  page: number;
  linesPerPage: number;
  direction: string;
  orderBy: string;

  constructor(
    orderBy: string,
    filter: string,
    page: number,
    linesPerPage: number,
    direction: string
  ) {
    this.filter = filter ? filter.toUpperCase() : '';
    this.page = page || 0;
    this.linesPerPage = linesPerPage || DEFAULT_PAGE_SIZE;
    this.direction = direction || 'ASC';
    this.orderBy = orderBy;
  }
}
