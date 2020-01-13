import { MatPaginatorIntl } from '@angular/material';

// arquivo para tradução dos labels do list-admin.component

const brRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 of ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} of ${length}`;
};

export function getBrPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Items by page:';
  paginatorIntl.firstPageLabel = 'First page';
  paginatorIntl.previousPageLabel = 'Previous page';
  paginatorIntl.nextPageLabel = 'Next page';
  paginatorIntl.lastPageLabel = 'Last page';
  paginatorIntl.getRangeLabel = brRangeLabel;

  return paginatorIntl;
}
