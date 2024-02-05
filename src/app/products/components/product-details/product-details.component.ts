import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
   @Input() product: Product | undefined = undefined;
   @Output() emitter = new EventEmitter<number>();


   constructor(private route: ActivatedRoute){

      const parameter = this.route.snapshot.paramMap.get('id');
      if(parameter) {
        alert(parameter);
      }

   }

   goBack() {
    this.emitter.emit(this.product?.id);
   }

}
