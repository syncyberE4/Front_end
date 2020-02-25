import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Sensor} from '../../../../core/models/sensor.model';
import {VatService} from '../../../../core/services/vat.service';
import {SensortypeService} from '../../../../core/services/sensortype.service';
import {Vat} from '../../../../core/models/vat.model';
import {Sensortype} from '../../../../core/models/sensortype.model';

@Component({
  selector: 'app-microcontroller-form',
  templateUrl: './microcontroller-form.component.html',
  styleUrls: ['./microcontroller-form.component.scss']
})
export class MicrocontrollerFormComponent implements OnInit {

  sensor: Sensor = new Sensor(0, undefined, undefined, undefined, false, undefined);
  vaten: Vat[];
  sensorTypes: Sensortype[];

  @Output() sensorToevoegen = new EventEmitter<Sensor>();
  constructor(private vatService: VatService, private sensorTypeService: SensortypeService) {
  }

  ngOnInit() {
    this.haalVaten();
    this.haalSensorTypes();
  }

  haalVaten() {
    this.vatService.getVaten().subscribe(result => {
      this.vaten = result;
    });
  }
  haalSensorTypes() {
    this.sensorTypeService.getSensorTypes().subscribe(result => {
      this.sensorTypes = result;
    });
  }

  maakSensor() {
    this.sensorToevoegen.emit(this.sensor);
  }
}
