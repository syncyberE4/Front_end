import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SecurityInterceptor} from './core/security/security.interceptor';
import {registerLocaleData} from '@angular/common';
import localeBE from '@angular/common/locales/be';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/security/guards/auth.guard';
import {LoginPaginaComponent} from './modules/login/login-pagina/login-pagina.component';
import {LoginModule} from './modules/login/login.module';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule
} from '@angular/material';
import {HomePaginaComponent} from './modules/home/home-pagina/home-pagina.component';
import {HomeModule} from './modules/home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginLayoutComponent } from './core/shared/login-layout/login-layout.component';
import { HomeLayoutComponent } from './core/shared/home-layout/home-layout.component';
import { NavigationComponent } from './core/shared/navigation/navigation.component';
import {AdminpaneelModule} from './modules/adminpaneel/adminpaneel.module';
import {AdminpaneelPaginaComponent} from './modules/adminpaneel/adminpaneel-pagina/adminpaneel-pagina.component';
import {AuthenticateService} from './core/security/authenticate.service';
import {GebruikerService} from './core/services/gebruiker.service';
import {VinificatiePaginaComponent} from './modules/vinificatie/vinificatie-pagina/vinificatie-pagina.component';
import {VinificatieModule} from './modules/vinificatie/vinificatie.module';
import {MateriaalPaginaComponent} from './modules/materiaal/materiaal-pagina/materiaal-pagina.component';
import {MateriaalModule} from './modules/materiaal/materiaal.module';
import {VatenAanmakenComponent} from './modules/materiaal/vaten-aanmaken/vaten-aanmaken.component';
import {PersprogrammaAanmakenComponent} from './modules/materiaal/persprogramma-aanmaken/persprogramma-aanmaken.component';
import {DruivensoortAanmakenComponent} from './modules/materiaal/druivensoort-aanmaken/druivensoort-aanmaken.component';
import {MicrocontrollerAanmakenComponent} from './modules/materiaal/sensor-aanmaken/microcontroller-aanmaken.component';
import {WijnsoortAanmakenComponent} from "./modules/materiaal/wijnsoort-aanmaken/wijnsoort-aanmaken.component";
import { ArchiefPaginaComponent } from './modules/archief/archief-pagina/archief-pagina.component';
import { ArchiefModule } from './modules/archief/archief.module';

registerLocaleData(localeBE, 'be');

const appRoutes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  {
    path: 'login-page', component: LoginLayoutComponent,
    children: [
      {path: '', component: LoginPaginaComponent}
    ]
  },
  { path: 'application', component: HomeLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home-page', pathMatch: 'full' },
      { path: 'home-page', component: HomePaginaComponent, canActivate: [AuthGuard] },
      { path: 'adminpaneel-page', component: AdminpaneelPaginaComponent, canActivate: [AuthGuard] },
      { path: 'vinificatie-page', component: VinificatiePaginaComponent, canActivate: [AuthGuard] },
      { path: 'materiaal-page', component: MateriaalPaginaComponent, canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'vaten-aanmaken', pathMatch: 'full' },
          { path: 'vaten-aanmaken', component: VatenAanmakenComponent, canActivate: [AuthGuard] },
          { path: 'persprogramma-aanmaken', component: PersprogrammaAanmakenComponent, canActivate: [AuthGuard] },
          { path: 'druivensoort-aanmaken', component: DruivensoortAanmakenComponent, canActivate: [AuthGuard] },
          { path: 'microcontroller-aanmaken', component: MicrocontrollerAanmakenComponent, canActivate: [AuthGuard] },
          { path: 'wijnsoort-aanmaken', component: WijnsoortAanmakenComponent, canActivate: [AuthGuard] },
        ]},
      { path: 'archief-page', component: ArchiefPaginaComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    HomeModule,
    AdminpaneelModule,
    VinificatieModule,
    MateriaalModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    ArchiefModule
  ],
  providers: [
    GebruikerService,
    AuthenticateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
