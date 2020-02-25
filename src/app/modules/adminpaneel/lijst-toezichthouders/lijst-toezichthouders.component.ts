import { Component, OnInit, Input } from '@angular/core';
import { Gebruiker } from 'src/app/core/models/gebruiker.model';
import { ToezichthouderService } from 'src/app/core/services/toezichthouder.service';
import { Toezichthouder } from 'src/app/core/models/toezichthouder.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ToevoegToezichthouderDialogComponent } from './toevoeg-toezichthouder-dialog/toevoeg-toezichthouder-dialog.component';
import { BevestigDialogComponent } from 'src/app/core/dialogs/bevestig-dialog/bevestig-dialog.component';
import { UpdateToezichthouderDialogComponent } from './update-toezichthouder-dialog/update-toezichthouder-dialog.component';

@Component({
  selector: 'app-lijst-toezichthouders',
  templateUrl: './lijst-toezichthouders.component.html',
  styleUrls: ['./lijst-toezichthouders.component.scss']
})
export class LijstToezichthoudersComponent implements OnInit {
  @Input() gebruikers: Gebruiker[];

  toezichthouders: Toezichthouder[];

  constructor(private dialog: MatDialog, private _toezichthouderService: ToezichthouderService) {
   }

  ngOnInit() {
    this._toezichthouderService.getToezichthouders().subscribe(result =>{
      this.toezichthouders = result;
    });
  }

  openAddToezichthouderDiaglog(){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
      gebruikers: this.gebruikers
    };

    const dialogRef = this.dialog.open(ToevoegToezichthouderDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( data => {
      // console.log("Dialog output:", data)
      if(data != null)
        this.toezichthouders = [data].concat(this.toezichthouders);
    });
  }

  openUpdateToezichthouderDiaglog(id : number){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
  
    dialogConfig.data = {
      gebruikers: this.gebruikers,
      toezichthouder: this.toezichthouders.filter(item => item.id == id)[0]
    };

    const dialogRef = this.dialog.open(UpdateToezichthouderDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( data => {
      // console.log("Dialog output:", data)
      if(data != null){
        this.toezichthouders =this.toezichthouders.filter(item => item.id != data.id);
        this.toezichthouders = [data].concat(this.toezichthouders);
      }
    });
  }
  
  delete(id: number){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
      // customDescription: "Bent u zeker om dit item te verwijderen?";
    };

    const dialogRef = this.dialog.open(BevestigDialogComponent , dialogConfig);

    dialogRef.afterClosed().subscribe( data => {
    if(data === true){
        this._toezichthouderService.deleteToezichthouder(id).subscribe(result => {
          console.log('delete is oke');
        });
        this.toezichthouders = this.toezichthouders.filter(item => item.id != id);
      }
    });


  }
}
