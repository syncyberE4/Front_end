import {Sensortype} from './sensortype.model';
import { Vat } from './vat.model';

export class Sensor {
  constructor(
    public id: number,
    public vatId: number,
    public sensorTypeId: number,
    public aansluitpin: number,
    public beschikbaar: boolean,
    public aanmaakDatum: Date) {
  }
  sensorType: Sensortype;
  vat: Vat;
}
