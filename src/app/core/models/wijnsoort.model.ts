import {Logboek} from './logboek.model';

export class Wijnsoort {
  constructor(
    public id: number,
    public naam: string) {
  }

  logboeken: Array<Logboek>;
}
