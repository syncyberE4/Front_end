import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sensor} from '../../../../core/models/sensor.model';

@Component({
  selector: 'app-microcontroller-lijst',
  templateUrl: './microcontroller-lijst.component.html',
  styleUrls: ['./microcontroller-lijst.component.scss']
})
export class MicrocontrollerLijstComponent implements OnInit {

  @Input() sensoren: Sensor[];
  // @Output() verwijderSensorId = new EventEmitter<number>();
  displayedColumns: string[] = ['no', 'vat', 'sensortype', 'aansluitpin', 'beschikbaar', 'aanmaakdatum'];

  constructor() { }

  ngOnInit() {
  }

  // verwijderSensor(id: number) {
  //   this.verwijderSensorId.emit(id);
  // }

}
