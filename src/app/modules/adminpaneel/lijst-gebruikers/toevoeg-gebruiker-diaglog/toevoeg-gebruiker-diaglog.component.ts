import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Gebruiker } from 'src/app/core/models/gebruiker.model';
import { GebruikerService } from 'src/app/core/services/gebruiker.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-toevoeg-gebruiker-diaglog',
  templateUrl: './toevoeg-gebruiker-diaglog.component.html',
  styleUrls: ['./toevoeg-gebruiker-diaglog.component.scss']
})
export class ToevoegGebruikerDiaglogComponent implements OnInit {
  
  form: FormGroup;
  rollen: string[];
  gebruiker: Gebruiker = new Gebruiker(0, '', '', '', '', '', undefined, '', true, '');
  error: {};

  constructor(
      private _gebruikerService: GebruikerService,
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ToevoegGebruikerDiaglogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {

        this._gebruikerService.getRollen().subscribe(result => {
          this.rollen = result;
        });
  }

  ngOnInit() {
    this.form = this.fb.group({
      voornaam: ['', [Validators.required]],
      achternaam: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefoonnummer: ['', [Validators.required]],
      rol: ['', [Validators.required]],
    });
  }

  maakGebruiker(){
    this._gebruikerService.addUser(this.gebruiker).subscribe(result =>{
        this.dialogRef.close(true);
    }, error => this.error = error);
  }

  close() {
    this.dialogRef.close();
  }
}
