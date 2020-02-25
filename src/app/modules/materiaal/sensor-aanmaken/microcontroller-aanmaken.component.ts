import { Component, OnInit } from '@angular/core';
import {Microcontroller} from '../../../core/models/microcontroller.model';
import {SensorService} from '../../../core/services/sensor.service';
import {Sensor} from '../../../core/models/sensor.model';

@Component({
  selector: 'app-microcontroller-aanmaken',
  templateUrl: './microcontroller-aanmaken.component.html',
  styleUrls: ['./microcontroller-aanmaken.component.scss']
})
export class MicrocontrollerAanmakenComponent implements OnInit {

  sensoren: Sensor[];


  constructor(private sensorService: SensorService) {
  }

  ngOnInit() {
    this.haalSensoren();
  }

  haalSensoren() {
    this.sensorService.getSensoren().subscribe(result => {
      this.sensoren = result;
    });
  }


  submitted(sensor: Sensor) {
    this.sensorService.addSensor(sensor).subscribe(result => {
      console.log('sensor add oke');
      this.haalSensoren();
    });
  }
  // delete(id: number) {
  //   this.sensorService.deleteMicro(id).subscribe(result => {
  //     console.log('delete is oke');
  //     this.haalSensoren();
  //   });
  // }
}
