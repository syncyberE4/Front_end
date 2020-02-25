import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Druivensoort} from '../../../../core/models/druivensoort.model';

@Component({
  selector: 'app-druivensoort-form',
  templateUrl: './druivensoort-form.component.html',
  styleUrls: ['./druivensoort-form.component.scss']
})
export class DruivensoortFormComponent implements OnInit {

  druivensoort: Druivensoort = new Druivensoort(0, '', '', undefined, undefined);
  @Output() druivensoortToegevoegd = new EventEmitter<Druivensoort>();
  constructor() {
  }

  ngOnInit() {
  }

  maakDruifensoort() {
    this.druivensoortToegevoegd.emit(this.druivensoort);
  }

}
