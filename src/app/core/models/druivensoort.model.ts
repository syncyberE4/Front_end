import {Logboek} from './logboek.model';

export class Druivensoort {
  constructor(
    public id: number,
    public naam: string,
    public beschrijving: string,
    public aanmaakdatum: Date,
    public updatedatum: Date) {
  }
  logboeken: Array<Logboek>;
}
