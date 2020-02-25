import {Component, OnInit} from '@angular/core';
import {Druivensoort} from '../../../core/models/druivensoort.model';
import {DruivensoortService} from '../../../core/services/druivensoort.service';

@Component({
  selector: 'app-druivensoort-aanmaken',
  templateUrl: './druivensoort-aanmaken.component.html',
  styleUrls: ['./druivensoort-aanmaken.component.scss']
})
export class DruivensoortAanmakenComponent implements OnInit {

  druivensoorten: Druivensoort[];


  constructor(private druivensoortService: DruivensoortService) {
  }

  ngOnInit() {
    this.haalDruivensoorten();
  }

  haalDruivensoorten() {
    this.druivensoortService.getDruivenSoorten().subscribe(result => {
      this.druivensoorten = result;
      console.log(result);
    });
  }


  submitted(druivensoort: Druivensoort) {
    this.druivensoortService.addDruivenSoorten(druivensoort).subscribe(result => {
      console.log('add druiven oke');
      this.haalDruivensoorten();
    });
  }
  delete(id: number) {
    this.druivensoortService.deleteDruivensoort(id).subscribe(result => {
      console.log('delete is oke');
      this.haalDruivensoorten();
    });
  }
}
