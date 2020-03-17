import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [CommonModule],
  entryComponents: [ConfirmComponent],
})
export class SharedModule {}
