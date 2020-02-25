import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BevestigDialogComponent } from './bevestig-dialog/bevestig-dialog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BevestigDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BevestigDialogComponent]
})
export class DialogModule { }
