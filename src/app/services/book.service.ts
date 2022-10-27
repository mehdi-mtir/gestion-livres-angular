import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private livres = [
    {id : 1, titre : "The slight edge", auteur : "jeff Olsen", prix : 12.50},
    {id : 2, titre : "Power of habits", auteur : "Charles Duhigg", prix : 18.00},
    {id : 3, titre : "Atomic habits", auteur : "James Clear", prix : 20.00}
  ];

  constructor() { }

  getLivres() {
    return [... this.livres];
  }

  getLivreById(id : number){
    return this.livres.find(
      livre => livre.id === id
    )
  }

  ajoutLivre(){

  }
}
