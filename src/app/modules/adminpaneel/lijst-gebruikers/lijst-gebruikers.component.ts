import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Gebruiker} from '../../../core/models/gebruiker.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { GebruikerService } from 'src/app/core/services/gebruiker.service';
import { ToevoegGebruikerDiaglogComponent } from './toevoeg-gebruiker-diaglog/toevoeg-gebruiker-diaglog.component';

@Component({
  selector: 'app-lijst-gebruikers',
  templateUrl: './lijst-gebruikers.component.html',
  styleUrls: ['./lijst-gebruikers.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LijstGebruikersComponent implements OnInit {

  @Input() gebruikers: Gebruiker[];
  @Output() verwijdertGebruiker = new EventEmitter<number>()
  expandedElement = null;
  constructor(private dialog: MatDialog, private _gebruikerService: GebruikerService) { }

  columnsToDisplay: string[] = ['naam', 'rol', 'actief'];


  ngOnInit() {
  }

  verwijderGebruiker(id: number) {
    console.log(id);
    this.verwijdertGebruiker.emit(id);
  }

  openAddGebruikerDiaglog(){
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
      gebruikers: this.gebruikers
    };

    const dialogRef = this.dialog.open(ToevoegGebruikerDiaglogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( data => {
      // console.log("Dialog output:", data)
      if(data == true){
        this._gebruikerService.getUsers().subscribe(result => {
          this.gebruikers = result;
        });
      }
    });
  }

  archiveerGebruiker(gebruiker : Gebruiker){
    this._gebruikerService.archiveUser(gebruiker).subscribe(result => {
      this._gebruikerService.getUsers().subscribe(result => {
        this.gebruikers = result;
      });
    });
  }
}


