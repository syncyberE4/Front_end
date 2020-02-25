import { Component, OnInit } from '@angular/core';
import {Vat} from '../../../core/models/vat.model';
import {VatService} from '../../../core/services/vat.service';

@Component({
  selector: 'app-vaten-aanmaken',
  templateUrl: './vaten-aanmaken.component.html',
  styleUrls: ['./vaten-aanmaken.component.scss']
})
export class VatenAanmakenComponent implements OnInit {

  vaten: Vat[];
  constructor(private vatService: VatService) { }

  ngOnInit() {
    this.haalVatenOp();
  }

  haalVatenOp() {
    this.vatService.getVatenWithMicroAndPoort().subscribe(result => {
      this.vaten = result;
      console.log(result);
    });
  }

  submitted(vat: Vat) {
    this.vatService.addVat(vat).subscribe(result => {
      console.log('add vat oke');
      this.haalVatenOp();
    });
  }
  delete(id: number) {
    this.vatService.deleteVat(id).subscribe(result => {
      console.log('delete is oke');
      this.haalVatenOp();
    });
  }
}
