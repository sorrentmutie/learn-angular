import { Component, OnDestroy } from '@angular/core';
import { ProductsData } from '../products/services/products-data';
import { Subscription, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ ProductsData]
})
export class FooterComponent implements OnDestroy{
   footerTitle: string = "Footer title";
   footerData = 0;
   subscription: Subscription | undefined = undefined;
   //productsData = new ProductsData();
   constructor(public service: ProductsData){
     const observableData =  of(1,2,3,4,5,6,7,8,9,10)
       .pipe(map( n => n*3 ),
             filter(n => n % 2 ===0));

    //  this.subscription = observableData.subscribe({
    //     next: (n) => console.log(n),
    //     error: (e) => console.log(e),
    //     complete: () => console.log('Fine trasmissione')
    //  });
   }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
