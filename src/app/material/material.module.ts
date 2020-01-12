import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
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
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule,
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
  MatSlideToggle
} from '@angular/material';
import { getBrPaginatorIntl } from './br-paginator';
import { AppDialogDefaultOptions, MY_DATE_FORMATS } from './material-default-options';

const modules = [

  FlexLayoutModule,
  // LayoutModule,
  MatToolbarModule,
  // MatButtonModule,
  // MatSidenavModule,
  // MatIconModule,
  // MatListModule,
  // MatMenuModule,
  // MatCardModule,
  // MatDividerModule,
  // MatSnackBarModule,
  // MatTableModule,
  // MatInputModule,
  // MatFormFieldModule,
  // MatPaginatorModule,
  // MatDialogModule,
  // MatSortModule,
  // MatSelectModule,
  // MatAutocompleteModule,
  // MatChipsModule,
  // MatDatepickerModule,
  // // MatMomentDateModule,
  // MatBadgeModule,
  // MatCheckboxModule,
  // MatProgressSpinnerModule,
  // MatStepperModule,
  // MatTooltipModule,
  // ScrollingModule,
  // MatTabsModule,
  // MatSlideToggleModule
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  providers: [
    { provide: MatPaginatorIntl, useValue: getBrPaginatorIntl() },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useClass: AppDialogDefaultOptions },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class MaterialModule {}
