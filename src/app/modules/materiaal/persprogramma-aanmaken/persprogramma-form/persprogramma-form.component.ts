import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Persprogramma} from '../../../../core/models/persprogramma.model';

@Component({
  selector: 'app-persprogramma-form',
  templateUrl: './persprogramma-form.component.html',
  styleUrls: ['./persprogramma-form.component.scss']
})
export class PersprogrammaFormComponent implements OnInit {

  persprogramma: Persprogramma = new Persprogramma(0, '', undefined, undefined);
  @Output() persprogrammaToegevoegd = new EventEmitter<Persprogramma>();
  constructor() { }

  ngOnInit() {
  }

  maakPersprogramma() {
    this.persprogrammaToegevoegd.emit(this.persprogramma);
  }

}
