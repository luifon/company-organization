import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { tap } from 'rxjs/operators';
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_PAGE_SIZES,
} from 'src/app/config/paginator.config';
import {
  STRATEGY_ERROR,
  SHARED_PAGEABLE_ERROR,
} from '../consts/error/class-usage-error.consts';
import { DELETED_SUCCESS } from '../consts/success/success-messages.consts';
import { DialogService } from '../services/dialog.service';
import { SnackbarService } from '../services/snackbar.service';
import { ListStrategy } from '../strategy/list.strategy';
import { PageableRequest } from './pageable-request';
import { PageableResponse } from './pageable-response';

export abstract class SharedPageable<T> implements AfterViewInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  abstract dataSource = new MatTableDataSource<T>();
  abstract filter = '';

  protected defaultSortColumn: string;
  private strategy: ListStrategy<T>;
  private component: any;

  constructor(
    private dialog: DialogService,
    private snackbarService: SnackbarService,
    component: any,
    strategy: ListStrategy<T>,
    defaultSortColumn: string
  ) {
    this.strategy = strategy;
    this.defaultSortColumn = defaultSortColumn;
    this.component = component;
  }

  ngAfterViewInit(): void {
    if (
      this.paginator.pageSizeOptions.toString() !==
        DEFAULT_PAGE_SIZES.toString() ||
      this.paginator.pageSize !== DEFAULT_PAGE_SIZE
    ) {
      throw new Error(SHARED_PAGEABLE_ERROR);
    }
    this.startPaginator();
    this.startSort();
  }

  getFilter(filter: string): void {
    this.filter = filter;
    this.paginator.pageIndex === 0
      ? this._loadData()
      : this.paginator.firstPage();
  }

  protected init(): void {
    this.paginator.pageSizeOptions = DEFAULT_PAGE_SIZES;
    this.paginator.pageSize = DEFAULT_PAGE_SIZE;
  }

  protected startSort(): void {
    this.sort.sortChange
      .pipe(
        tap(() => {
          this._loadData();
        })
      )
      .subscribe();
  }

  protected startPaginator(): void {
    this.paginator.page
      .pipe(
        tap(() => {
          this._loadData();
        })
      )
      .subscribe();
  }

  openDeleteDialog(id: string): void {
    this.dialog.openConfirmDialog().subscribe(res => {
      if (res) {
        this._deleteElement(id);
      }
    });
  }

  protected _deleteElement(id: string): void {
    if (!this.strategy) {
      throw new Error(STRATEGY_ERROR);
    }
    this.strategy.delete(id).subscribe(() => {
      this.snackbarService.openSuccessSnackbar(DELETED_SUCCESS);
      this.handleReloadAfterDelete();
    });
  }

  openDialog(id?: string): void {
    if (!!id) {
      this.strategy.findById(id).subscribe(byId => {
        this._openDialog(this.component, byId);
      });
    }
  }

  protected _openDialog(component: any, data: T, width = '50%'): void {
    this.dialog
      .open(component, {
        width,
        data,
      })
      .afterClosed()
      .subscribe(() => {
        this._loadData();
      });
  }

  abstract callLoadData(): void;

  protected _loadData(): void {
    if (!this.strategy) {
      throw new Error(STRATEGY_ERROR);
    }
    const params = this._getParams();
    this.strategy
      .findPageable(params)
      .subscribe((response: PageableResponse<any>) => {
        this.paginator.length = response.totalElements;
        this.dataSource.data = response.content;
      });
  }

  protected _getParams(): PageableRequest {
    return new PageableRequest(
      this.sort.active || this.defaultSortColumn,
      this.filter,
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.sort.direction
    );
  }

  protected handleReloadAfterDelete(): void {
    if (this.dataSource.data.length === 1 && this.paginator.pageIndex !== 0) {
      this.paginator.previousPage();
    } else {
      this._loadData();
    }
  }
}
