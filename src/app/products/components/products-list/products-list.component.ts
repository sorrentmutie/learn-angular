import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  @Input()  products: Product[] | undefined = undefined;
  @Output() emitter = new EventEmitter<Product>();

  showDetails(selectedProduct: Product) {
    this.emitter.emit(selectedProduct);
  } 
}
