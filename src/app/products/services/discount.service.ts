import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  getDiscount(id: number) : number {
    return 0.15;
  }
}
