import {Component, OnInit, Inject, NgModule} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DATE_FORMATS,
  MatDatepickerModule,
  NativeDateModule, MAT_DATE_LOCALE
} from '@angular/material';
import { Gebruiker } from 'src/app/core/models/gebruiker.model';
import { ToezichthouderService } from 'src/app/core/services/toezichthouder.service';
import {Toezichthouder} from '../../../../core/models/toezichthouder.model';

@Component({
  selector: 'app-toevoeg-toezichthouder-dialog',
  templateUrl: './toevoeg-toezichthouder-dialog.component.html',
  styleUrls: ['./toevoeg-toezichthouder-dialog.component.scss']
})
export class ToevoegToezichthouderDialogComponent implements OnInit {

  form: FormGroup;
  today: Date = new Date();
  gebruikers: Gebruiker[];
  error: {};
  toezichthouder: Toezichthouder = new Toezichthouder(undefined, undefined, undefined, undefined, undefined);

  constructor(
      private _toezichthouderService : ToezichthouderService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ToevoegToezichthouderDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

    this.gebruikers = data.gebruikers.filter(item => item.actief != false);
    if(data.toezichthouder != null)
      this.toezichthouder = data.toezichthouder;
  }

  ngOnInit() {
    this.form = this.fb.group({
      gebruikers: ['', [Validators.required]],
      startDatum: ['', [Validators.required]],
      eindDatum: ['', [Validators.required]],
    });
  }

  maakToezichthouder(){
    this._toezichthouderService.addToezichthouder(this.toezichthouder).subscribe(result =>{
        this.toezichthouder.id = result;
        this.toezichthouder.gebruiker = this.gebruikers.filter(item => item.id == this.toezichthouder.gebruikerId)[0];
        this.dialogRef.close(this.toezichthouder);
    }, error => this.error = error);
  }

  close() {
    this.dialogRef.close();
  }
}
