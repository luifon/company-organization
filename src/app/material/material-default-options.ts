import { MatDialogConfig } from '@angular/material';

export class AppDialogDefaultOptions extends MatDialogConfig {
  width = '90vw';
  maxHeight = 'auto';
}

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: ['dd/MM/yyyy']
  },
  display: {
    dateInput: 'L',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};
