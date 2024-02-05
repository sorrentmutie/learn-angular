import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { DiscountService } from "./discount.service";
@Injectable({
  providedIn: 'root'
})
export class ProductsData {

  private randomNumber: number = 0;
  constructor(private discountService: DiscountService){
     this.randomNumber = Math.random();
    // console.log("Sono nel costruttore di ProductsData");
  }

  getRandomNumber(){
    return this.randomNumber;
  }  
    
  getProducts() : Product[]{
    return [
      { id: 1, name: "Frigorifero", price: 1000 * (1 - this.discountService.getDiscount(1)), releaseDate: new Date(), 
      image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"},
      { id: 2, name: "Forno a microonde", price: 300 * ( 1- this.discountService.getDiscount(2)), releaseDate: new Date(), 
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
