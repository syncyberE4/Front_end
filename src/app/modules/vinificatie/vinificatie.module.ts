import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinificatiePaginaComponent } from './vinificatie-pagina/vinificatie-pagina.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatRadioModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { AlarmFormComponent } from './alarm-form/alarm-form.component';



@NgModule({
  declarations: [VinificatiePaginaComponent, AlarmFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class VinificatieModule { }
