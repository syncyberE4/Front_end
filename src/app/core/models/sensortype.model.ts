import {Sensor} from './sensor.model';

export class Sensortype {
  constructor(
    public id: number,
    public naam: string,
    public eenheid: string,
    public kommagetal: number,
    public tijdsintervalSec: number,
    public aanmaakdatum: Date,
    public updatedatum: Date,
  ) {}

  sensoren: Array<Sensor>;
}
