import {Persprogramma} from './persprogramma.model';
import {Druivensoort} from './druivensoort.model';
import {Vat} from './vat.model';
import {Gebruiker} from './gebruiker.model';
import {Wijnsoort} from './wijnsoort.model';

export class Logboek {
  constructor(
    public id: number,
    public gebruikerId: number,
    public persprogrammaId: number,
    public druivensoortId: number,
    public opmerking: string,
    public vatId: number,
    public aanmaakdatum: Date,
    public updatedatum: Date,
    public einddatum: Date,
    public wijnsoortId: number,
    public manueel: boolean) {
  }

  gebruiker: Gebruiker;
  persprogramma: Persprogramma;
  druivensoort: Druivensoort;
  vat: Vat;
  wijnsoort: Wijnsoort;
}
