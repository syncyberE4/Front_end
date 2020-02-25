import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Wijnsoort} from '../../../../core/models/wijnsoort.model';

@Component({
  selector: 'app-wijnsoort-lijst',
  templateUrl: './wijnsoort-lijst.component.html',
  styleUrls: ['./wijnsoort-lijst.component.scss']
})
export class WijnsoortLijstComponent implements OnInit {

  @Input() wijnsoorten: Wijnsoort[];
  @Output() verwijderWijnId = new EventEmitter<number>();
  displayedColumns: string[] = ['no', 'naam', 'crud'];

  constructor() { }

  ngOnInit() {
  }

  verwijderWijn(id: number) {
    this.verwijderWijnId.emit(id);
  }
}
