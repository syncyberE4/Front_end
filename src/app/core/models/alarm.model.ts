import {Sensor} from './sensor.model';

export class Alarm {
  constructor(
    public id: number,
    public sensorId: number,
    public activatiewaarde: number,
    public groterdan: boolean,
    public actief: boolean,
    public standaard: boolean,
    public bevestig: boolean,
    public aanmaakdatum: Date,
    public updatedatum: Date
  ) {}
  sensor: Sensor;
}
