import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Druivensoort} from '../../../../core/models/druivensoort.model';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-druivensoort-lijst',
  templateUrl: './druivensoort-lijst.component.html',
  styleUrls: ['./druivensoort-lijst.component.scss']
})
export class DruivensoortLijstComponent implements OnInit {

  @Input() druivensoorten: Druivensoort[];
  @Output() verwijderDruifId = new EventEmitter<number>();
  displayedColumns: string[] = ['no', 'beschrijving', 'naam', 'aanmaak-datum', 'update-datum', 'crud'];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  verwijderDruif(id: number) {
    this.verwijderDruifId.emit(id);
  }
}
