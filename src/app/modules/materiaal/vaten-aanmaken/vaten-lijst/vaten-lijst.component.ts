import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Vat} from '../../../../core/models/vat.model';

@Component({
  selector: 'app-vaten-lijst',
  templateUrl: './vaten-lijst.component.html',
  styleUrls: ['./vaten-lijst.component.scss']
})
export class VatenLijstComponent implements OnInit {

  @Input() vaten: Vat[];
  @Output() verwijderVatId = new EventEmitter<number>();
  displayedColumns: string[] = ['no', 'label', 'opmerking', 'beschikbaar', 'online', 'raspi', 'poort', 'aanmaak-datum',
    'update-datum', 'crud'];

  constructor() {
  }

  ngOnInit() {
  }

  verwijderVat(id: number) {
    this.verwijderVatId.emit(id);
  }

}
