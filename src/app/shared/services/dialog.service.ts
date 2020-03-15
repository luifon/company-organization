import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService extends MatDialog {
  openConfirmDialog(
    mensagem: string = 'Do you wish to confirm this action?',
    list?: string[]
  ): Observable<boolean> {
    // const msg: CustomMessage = { mensagem: mensagem.toUpperCase(), list };
    // return this.open(ConfirmComponent, {
    //   width: '40%',
    //   data: msg,
    // }).afterClosed();

    return null;
  }
}
