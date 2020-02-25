import { Component, OnInit, Inject } from '@angular/core';
import { Melding } from 'src/app/core/models/melding.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MeldingService } from 'src/app/core/services/melding.service';

@Component({
  selector: 'app-toon-melding-dialog',
  templateUrl: './toon-melding-dialog.component.html',
  styleUrls: ['./toon-melding-dialog.component.scss']
})
export class ToonMeldingDialogComponent implements OnInit {

  melding: Melding;
  error: {};

  constructor(private _meldingService : MeldingService,
              private dialogRef: MatDialogRef<ToonMeldingDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
    if(data.melding != null)
      this.melding = data.melding;
  }

  ngOnInit() {
  }

  bevestigMelding(){
    this._meldingService.bevestigMelding(this.melding).subscribe();
    this.dialogRef.close(this.melding);
  }

  close() {
    this.dialogRef.close();
}

}
