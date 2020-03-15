import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MAT_DATE_FORMATS,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material';
import { getBrPaginatorIntl } from '../material/br-paginator';
import {
  AppDialogDefaultOptions,
  MY_DATE_FORMATS,
} from '../material/material-default-options';

const WHOLE = [
  FlexLayoutModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCardModule,
  MatDividerModule,
  MatSnackBarModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSortModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatBadgeModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatStepperModule,
  MatTooltipModule,
  ScrollingModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, WHOLE],
  exports: [WHOLE],
  providers: [
    { provide: MatPaginatorIntl, useValue: getBrPaginatorIntl() },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useClass: AppDialogDefaultOptions },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
})
export class SharedModule {}
