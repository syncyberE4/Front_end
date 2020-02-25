import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Vat} from '../../../../core/models/vat.model';
import {Microcontroller} from '../../../../core/models/microcontroller.model';
import {Raspipoort} from '../../../../core/models/raspipoort.model';
import {VatService} from '../../../../core/services/vat.service';
import {MicrocontrollerService} from '../../../../core/services/microcontroller.service';

@Component({
  selector: 'app-vaten-form',
  templateUrl: './vaten-form.component.html',
  styleUrls: ['./vaten-form.component.scss']
})
export class VatenFormComponent implements OnInit {

  vat: Vat = new Vat(undefined, '', '', undefined, undefined,
    undefined, 0, 0, undefined, '', '',
    undefined, undefined, undefined, undefined, undefined);

  raspis: Microcontroller[];
  raspipoorten: Raspipoort[];

  @Output() vatToegevoegd = new EventEmitter<Vat>();

  constructor(private vatService: VatService, private microService: MicrocontrollerService) { }

  ngOnInit() {
    this.vatService.getRaspipoorten().subscribe(result => {
      this.raspipoorten = result;
    });

    this.microService.getMicrocontrollers().subscribe(result => {
      this.raspis = result;
    });
  }

  maakVat() {
    this.vatToegevoegd.emit(this.vat);
  }
}
