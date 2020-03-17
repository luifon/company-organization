import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { CustomMessage } from '../model/custom-message';
import { CONFIRM_MESSAGE } from '../consts/others/confirmation.const';

@Injectable({
  providedIn: 'root',
})
export class DialogService extends MatDialog {
  openConfirmDialog(
    message: string = CONFIRM_MESSAGE,
    list?: string[]
  ): Observable<boolean> {
    const msg: CustomMessage = { message: message.toUpperCase(), list };
    return this.open(ConfirmComponent, {
      width: '40%',
      data: msg,
    }).afterClosed();
  }
}
