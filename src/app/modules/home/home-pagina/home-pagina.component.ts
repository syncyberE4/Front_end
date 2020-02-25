import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-pagina',
  templateUrl: './home-pagina.component.html',
  styleUrls: ['./home-pagina.component.scss']
})
export class HomePaginaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      console.log(params.id);
    });
  }

  ngOnInit() {
  }

}
