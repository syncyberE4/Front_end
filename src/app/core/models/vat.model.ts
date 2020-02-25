import {Logboek} from './logboek.model';
import {Raspipoort} from './raspipoort.model';
import {Microcontroller} from './microcontroller.model';

export class Vat {
  constructor(
    public id: number,
    public label: string,
    public opmerking: string,
    public beschikbaar: boolean,
    public online: boolean,
    public aanmaakdatum: Date,
    public raspiId: number,
    public poortId: number,
    public updatedatum: Date,
    public locatie: string,
    public volume: string,
    public type: string,
    public koelmantel: boolean,
    public materiaal: string,
    public mangat: boolean,
    public manueel: boolean) {
  }

  logboeken: Array<Logboek>;
  raspiPoort: Raspipoort;
  microcontroller: Microcontroller;
}
