import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPaginaComponent } from './login-pagina/login-pagina.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SharedModule } from 'src/app/core/shared/shared.module';




@NgModule({
  declarations: [LoginPaginaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class LoginModule { }
