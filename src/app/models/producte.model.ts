export class Producte{
  nom: string;
  preu: number;
  tipus: string;
  idprod: number;
  descripcio: string;

  constructor(pNom: string, pPreu: number, pTipus: string, pIdprod: number, pDescripcio: string){
    this.nom = pNom;
    this.preu = pPreu;
    this.tipus = pTipus;
    this.idprod = pIdprod;
    this.descripcio = pDescripcio;
  }

}
