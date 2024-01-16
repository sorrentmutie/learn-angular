import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsData } from '../../services/products-data';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
   availableProducts: Product[] | undefined = undefined;
   notAvailableProducts: Product[] | undefined = undefined;
   selectedProduct: Product | undefined = undefined;
   productsData = new ProductsData();

   constructor() {
   this.availableProducts = this.productsData.getProducts();
   this.notAvailableProducts = this.productsData.getNotAvailableProducts();
   }

   goBack(id: number){
      console.log(id);
      this.selectedProduct = undefined;
   }
  showNotAvailableDetails(selectedProduct: Product) {
    alert(selectedProduct.id);
  }

  showAvailableDetails(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
  }
}
