import { Product } from "../models/product";

export class ProductsData {

  private randomNumber: number = 0;
  constructor(){
     this.randomNumber = Math.random();
  }

  getRandomNumber(){
    return this.randomNumber;
  }  
    
  getProducts() : Product[]{
    return [
      { id: 1, name: "Frigorifero", price: 1000, releaseDate: new Date(), 
      image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"},
      { id: 2, name: "Forno a microonde", price: 300, releaseDate: new Date(), 
      image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"}

    ];
 }

getNotAvailableProducts(): Product[] {
  return [
    { id: 3, name: "Frigorifero", price: 1000, releaseDate: new Date(), 
    image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"},
    { id: 4, name: "Forno a microonde", price: 300, releaseDate: new Date(), 
    image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"}

  ];
}


}
