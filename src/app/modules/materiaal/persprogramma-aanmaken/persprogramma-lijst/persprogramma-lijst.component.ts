import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Persprogramma} from '../../../../core/models/persprogramma.model';

@Component({
  selector: 'app-persprogramma-lijst',
  templateUrl: './persprogramma-lijst.component.html',
  styleUrls: ['./persprogramma-lijst.component.scss']
})
export class PersprogrammaLijstComponent implements OnInit {

  @Input() persprogrammas: Persprogramma[];
  @Output() verwijderPersId = new EventEmitter<number>();
  displayedColumns: string[] = ['no', 'omschrijving', 'aanmaak-datum', 'update-datum', 'crud'];
  constructor() { }

  ngOnInit() {
  }

  verwijderPers(id: number) {
    this.verwijderPersId.emit(id);
  }

}
