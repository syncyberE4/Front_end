import { Component, OnInit } from '@angular/core';
import {Wijnsoort} from '../../../core/models/wijnsoort.model';
import {WijnsoortService} from "../../../core/services/wijnsoort.service";

@Component({
  selector: 'app-wijnsoort-aanmaken',
  templateUrl: './wijnsoort-aanmaken.component.html',
  styleUrls: ['./wijnsoort-aanmaken.component.scss']
})
export class WijnsoortAanmakenComponent implements OnInit {

  wijnsoorten: Wijnsoort[];
  constructor(private wijnsoortService: WijnsoortService) { }

  ngOnInit() {
    this.haalWijnsoorten();
  }

  haalWijnsoorten() {
    this.wijnsoortService.getWijnsoorten().subscribe(result => {
      this.wijnsoorten = result;
      console.log(result);
    });
  }


  submitted(wijnsoort: Wijnsoort) {
    this.wijnsoortService.addDruivenSoorten(wijnsoort).subscribe(result => {
      console.log('add wijnsoort oke');
      this.haalWijnsoorten();
    });
  }
  delete(id: number) {
    this.wijnsoortService.deleteDruivensoort(id).subscribe(result => {
      console.log('delete is oke');
      this.haalWijnsoorten();
    });
  }
}
