import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaalPaginaComponent } from './materiaal-pagina/materiaal-pagina.component';
import {RouterModule} from '@angular/router';
import { VatenAanmakenComponent } from './vaten-aanmaken/vaten-aanmaken.component';
import { DruivensoortAanmakenComponent } from './druivensoort-aanmaken/druivensoort-aanmaken.component';
import { PersprogrammaAanmakenComponent } from './persprogramma-aanmaken/persprogramma-aanmaken.component';
import { MicrocontrollerAanmakenComponent } from './sensor-aanmaken/microcontroller-aanmaken.component';
import {MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { DruivensoortFormComponent } from './druivensoort-aanmaken/druivensoort-form/druivensoort-form.component';
import { DruivensoortLijstComponent } from './druivensoort-aanmaken/druivensoort-lijst/druivensoort-lijst.component';
import {SharedModule} from '../../core/shared/shared.module';
import { PersprogrammaFormComponent } from './persprogramma-aanmaken/persprogramma-form/persprogramma-form.component';
import { PersprogrammaLijstComponent } from './persprogramma-aanmaken/persprogramma-lijst/persprogramma-lijst.component';
import { MicrocontrollerLijstComponent } from './sensor-aanmaken/sensor-lijst/microcontroller-lijst.component';
import { MicrocontrollerFormComponent } from './sensor-aanmaken/sensor-form/microcontroller-form.component';
import { VatenFormComponent } from './vaten-aanmaken/vaten-form/vaten-form.component';
import { VatenLijstComponent } from './vaten-aanmaken/vaten-lijst/vaten-lijst.component';
import { WijnsoortAanmakenComponent } from './wijnsoort-aanmaken/wijnsoort-aanmaken.component';
import { WijnsoortFormComponent } from './wijnsoort-aanmaken/wijnsoort-form/wijnsoort-form.component';
import { WijnsoortLijstComponent } from './wijnsoort-aanmaken/wijnsoort-lijst/wijnsoort-lijst.component';
import {BevestigDialogComponent} from '../../core/dialogs/bevestig-dialog/bevestig-dialog.component';



@NgModule({
  declarations: [MateriaalPaginaComponent, VatenAanmakenComponent, DruivensoortAanmakenComponent, PersprogrammaAanmakenComponent, MicrocontrollerAanmakenComponent, DruivensoortFormComponent, DruivensoortLijstComponent, PersprogrammaFormComponent, PersprogrammaLijstComponent, MicrocontrollerLijstComponent, MicrocontrollerFormComponent, VatenFormComponent, VatenLijstComponent, WijnsoortAanmakenComponent, WijnsoortFormComponent, WijnsoortLijstComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    SharedModule
  ],
  entryComponents: [
    BevestigDialogComponent
  ]
})
export class MateriaalModule { }
