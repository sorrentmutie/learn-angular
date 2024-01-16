import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
   @Input() product: Product | undefined = undefined;
   @Output() emitter = new EventEmitter<number>();


   goBack() {
    this.emitter.emit(this.product?.id);
   }

}
