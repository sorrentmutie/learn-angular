import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
    products: Product[] | undefined = undefined;

    constructor(){
      this.products = this.getProducts();
    }

   getProducts() : Product[]{
      return [
        { id: 1, name: "Frigorifero", price: 1000, releaseDate: new Date(), 
        image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"},
        { id: 2, name: "Forno a microonde", price: 300, releaseDate: new Date(), 
        image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-logo-png-transparent.png"}

      ];
   }

}
