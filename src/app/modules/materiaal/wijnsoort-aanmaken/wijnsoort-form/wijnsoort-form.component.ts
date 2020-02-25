import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Wijnsoort} from '../../../../core/models/wijnsoort.model';

@Component({
  selector: 'app-wijnsoort-form',
  templateUrl: './wijnsoort-form.component.html',
  styleUrls: ['./wijnsoort-form.component.scss']
})
export class WijnsoortFormComponent implements OnInit {

  wijnsoort: Wijnsoort = new Wijnsoort(0, '');
  @Output() wijnsoortToegevoegd = new EventEmitter<Wijnsoort>();
  constructor() {
  }

  ngOnInit() {
  }

  maakWijnsoort() {
    this.wijnsoortToegevoegd.emit(this.wijnsoort);
  }
}
