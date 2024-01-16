import { Component } from '@angular/core';
import { ProductsData } from '../products/services/products-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
   footerTitle: string = "Footer title";
   productsData = new ProductsData();

}
