import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiefPaginaComponent } from './archief-pagina/archief-pagina.component';
import { SharedModule } from 'src/app/core/shared/shared.module';



@NgModule({
  declarations: [ArchiefPaginaComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ArchiefModule { }
