import {Component, OnInit} from '@angular/core';
import {Gebruiker} from '../../../core/models/gebruiker.model';
import {GebruikerService} from '../../../core/services/gebruiker.service';

@Component({
  selector: 'app-adminpaneel-pagina',
  templateUrl: './adminpaneel-pagina.component.html',
  styleUrls: ['./adminpaneel-pagina.component.scss']
})
export class AdminpaneelPaginaComponent implements OnInit {

  gebruikers: Gebruiker[];
  dataLoaded = false;

  constructor(private gebruikerService: GebruikerService) {
  }

  ngOnInit() {
    this.haalUser();
  }

  haalUser() {
    this.gebruikerService.getUsers().subscribe(result => {
      this.gebruikers = result;
      this.dataLoaded = true;
    });
  }

  verwijderGebruiker(id: number) {
    this.gebruikerService.deleteUser(id).subscribe( result => {
      this.haalUser();
    });
  }
}
