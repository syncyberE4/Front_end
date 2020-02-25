import {Logboek} from './logboek.model';

export class Persprogramma {
  constructor(
    public id: number,
    public omschrijving: string,
    public aanmaakdatum: Date,
    public updatedatum: Date) {
  }

  logboeken: Array<Logboek>;
}
