import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MeldingService } from 'src/app/core/services/melding.service';

@Component({
  selector: 'app-instel-melding-dialog',
  templateUrl: './instel-melding-dialog.component.html',
  styleUrls: ['./instel-melding-dialog.component.scss']
})
export class InstelMeldingDialogComponent implements OnInit {

  form: FormGroup;
  today: Date = new Date();
  error: {};
  webAdres: string = "";
  sendGridAPIKey: string = "";
  twilioAPIKey: string = "";

  constructor(
      private _meldingService : MeldingService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<InstelMeldingDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {}

  ngOnInit() {
    this.form = this.fb.group({
      webAdres: ['', [Validators.required]],
      startDatum: ['', [Validators.required]],
      eindDatum: ['', [Validators.required]],
    });
  }

  meldingInstellen(){
    this._meldingService.stelMeldingIn(this.webAdres, this.sendGridAPIKey, this.twilioAPIKey).subscribe(result =>{
        this.dialogRef.close();
    }, error => this.error = error);
  }

  close() {
    this.dialogRef.close();
  }
}
