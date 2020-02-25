import { Component, OnInit } from '@angular/core';
import {Persprogramma} from '../../../core/models/persprogramma.model';
import {PersprogrammaService} from '../../../core/services/persprogramma.service';

@Component({
  selector: 'app-persprogramma-aanmaken',
  templateUrl: './persprogramma-aanmaken.component.html',
  styleUrls: ['./persprogramma-aanmaken.component.scss']
})
export class PersprogrammaAanmakenComponent implements OnInit {

  persprogrammas: Persprogramma[];
  constructor(private persprogrammaService: PersprogrammaService) { }

  ngOnInit() {
    this.haalPersProgrammas();
  }

  haalPersProgrammas() {
    this.persprogrammaService.getPersProgrammas().subscribe(result => {
      console.log('persprgrammas halen oke');
      this.persprogrammas = result;
    });
  }

  submitted(persprogramma: Persprogramma) {
    this.persprogrammaService.addPersProgrammas(persprogramma).subscribe(result => {
      console.log('add persprogramma oke');
      this.haalPersProgrammas();
    });
  }
  delete(id: number) {
    this.persprogrammaService.deletePersprogramma(id).subscribe(result => {
      console.log('delete is oke');
      this.haalPersProgrammas();
    });
  }
}
