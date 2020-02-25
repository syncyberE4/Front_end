import { Component, OnInit } from '@angular/core';
import { Melding } from 'src/app/core/models/melding.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MeldingService } from 'src/app/core/services/melding.service';
import { ToonMeldingDialogComponent } from './toon-melding-dialog/toon-melding-dialog.component';

@Component({
  selector: 'app-lijst-meldingen',
  templateUrl: './lijst-meldingen.component.html',
  styleUrls: ['./lijst-meldingen.component.scss']
})
export class LijstMeldingenComponent implements OnInit {

  meldingen : Melding[];

  constructor(private dialog: MatDialog, private _meldingService: MeldingService) {
   }

  ngOnInit() {
    this._meldingService.getMeldingen().subscribe(result =>{
      this.meldingen = result;
    });
  }

  openViewMeldingDiaglog(id : number){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
      melding : this.meldingen.filter(item => item.id == id)[0]
    };

    const dialogRef = this.dialog.open(ToonMeldingDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( data => {
      if(data != null){
        // update bevestigde melding
        (data as Melding).bevestig = true;
        this.meldingen =this.meldingen.filter(item => item.id != data.id);
         this.meldingen = [data].concat(this.meldingen);
      }
    });
  }

}
