import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from '../../../core/models/sensor.model';
import {Alarm} from '../../../core/models/alarm.model';
import {AlarmService} from '../../../core/services/alarm.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.scss']
})
export class AlarmFormComponent implements OnInit {

  @Input() sensor: Sensor;
  alarmGroterdan: Alarm = new Alarm(0, 0, undefined, true, undefined,
    undefined, undefined, undefined, undefined);

  alarmKleinerdan: Alarm = new Alarm(0, 0, undefined, false, undefined,
    undefined, undefined, undefined, undefined);

  submitted = false;

  constructor(public dialog: MatDialog, private alarmService: AlarmService) {
  }

  ngOnInit() {
    this.alarmGroterdan.sensorId = this.sensor.id;
    this.alarmKleinerdan.sensorId = this.sensor.id;
  }

  addAlarm() {
    this.alarmService.addAlarm(this.alarmGroterdan).subscribe(result => {
      console.log('alarm add oke');
      console.log(this.alarmGroterdan);
    });
    this.alarmService.addAlarm(this.alarmKleinerdan).subscribe(resultalarm => {
      console.log('alarm add oke');
      console.log(this.alarmKleinerdan);
    });
    alert('Alarm is toegevoegd');
    this.submitted = true;
  }
}
