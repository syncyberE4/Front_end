import { Gebruiker } from './gebruiker.model';

export class Toezichthouder {
    constructor(
      public id: number,
      public niveau: number,
      public gebruikerId: number,
      public startDatum: Date,
      public eindDatum: Date
    ) {}

    public gebruiker: Gebruiker
  }