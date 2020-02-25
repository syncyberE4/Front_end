import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpaneelPaginaComponent } from './adminpaneel-pagina/adminpaneel-pagina.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { LijstGebruikersComponent } from './lijst-gebruikers/lijst-gebruikers.component';
import { LijstToezichthoudersComponent } from './lijst-toezichthouders/lijst-toezichthouders.component';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { ToevoegToezichthouderDialogComponent } from './lijst-toezichthouders/toevoeg-toezichthouder-dialog/toevoeg-toezichthouder-dialog.component';
import { DialogModule } from 'src/app/core/dialogs/dialog.module';
import { BevestigDialogComponent } from 'src/app/core/dialogs/bevestig-dialog/bevestig-dialog.component';
import { UpdateToezichthouderDialogComponent } from './lijst-toezichthouders/update-toezichthouder-dialog/update-toezichthouder-dialog.component';
import { LijstMeldingenComponent } from './lijst-meldingen/lijst-meldingen.component';
import { ToonMeldingDialogComponent } from './lijst-meldingen/toon-melding-dialog/toon-melding-dialog.component';
import { InstelMeldingDialogComponent } from './lijst-meldingen/instel-melding-dialog/instel-melding-dialog.component';
import { ToevoegGebruikerDiaglogComponent } from './lijst-gebruikers/toevoeg-gebruiker-diaglog/toevoeg-gebruiker-diaglog.component';



@NgModule({
  declarations: [
    AdminpaneelPaginaComponent, 
    LijstGebruikersComponent, 
    LijstToezichthoudersComponent, 
    ToevoegToezichthouderDialogComponent, 
    UpdateToezichthouderDialogComponent, 
    LijstMeldingenComponent, 
    ToonMeldingDialogComponent,
    InstelMeldingDialogComponent,
    ToevoegGebruikerDiaglogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    SharedModule,
    DialogModule
  ],
  entryComponents: [
    ToevoegToezichthouderDialogComponent, 
    BevestigDialogComponent, 
    UpdateToezichthouderDialogComponent,
    ToonMeldingDialogComponent,
    InstelMeldingDialogComponent,
    ToevoegGebruikerDiaglogComponent
  ]
})
export class AdminpaneelModule { }
