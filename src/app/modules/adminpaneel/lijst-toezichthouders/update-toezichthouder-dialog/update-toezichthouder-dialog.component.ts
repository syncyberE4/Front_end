import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToezichthouderService } from 'src/app/core/services/toezichthouder.service';
import { Toezichthouder } from 'src/app/core/models/toezichthouder.model';
import { Gebruiker } from 'src/app/core/models/gebruiker.model';

@Component({
  selector: 'app-update-toezichthouder-dialog',
  templateUrl: './update-toezichthouder-dialog.component.html',
  styleUrls: ['./update-toezichthouder-dialog.component.scss']
})
export class UpdateToezichthouderDialogComponent implements OnInit {

  today: Date = new Date();
  form: FormGroup;
  gebruikers: Gebruiker[];
  error: {};
  toezichthouder: Toezichthouder = new Toezichthouder(undefined, undefined, undefined, undefined, undefined);

  constructor(private _toezichthouderService : ToezichthouderService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<UpdateToezichthouderDialogComponent>,
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

  updateToezichthouder(){
    this._toezichthouderService.updateToezichthouder(this.toezichthouder).subscribe(result =>{
        this.toezichthouder.gebruiker = this.gebruikers.filter(item => item.id == this.toezichthouder.gebruikerId)[0];
        this.dialogRef.close(this.toezichthouder);
    }, error => this.error = error);
  }

  close() {
    this.dialogRef.close();
}

}
