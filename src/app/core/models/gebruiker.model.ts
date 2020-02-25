import DateTimeFormat = Intl.DateTimeFormat;

export class Gebruiker {
  constructor(
  public id: number,
  public email: string,
  public voornaam: string,
  public achternaam: string,
  public telefoonnummer: string,
  public rol: string,
  public aanmaakDatum: Date,
  public wachtwoord: string,
  public actief: boolean,
  public token: string) {}

  // toezichthouders: Array<Toezichthouder>;
  // handmetingen: Array<Handmetingen>;
  // logboeken: Array<Logboek>;
  // meldingen: Array<Melding>;
}
