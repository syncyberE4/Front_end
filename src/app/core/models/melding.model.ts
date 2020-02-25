import { Alarm } from './alarm.model';
import { Gebruiker } from './gebruiker.model';

export class Melding {
  constructor(
    public id: number,
    public boodschap: string,
    public gebruikerId: number,
    public alarmId: number,
    public bevestig: boolean,
    public aanmaakdatum: Date,
  ) {}
  alarm: Alarm;
  gebruiker: Gebruiker;
}
