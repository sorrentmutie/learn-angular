import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer-details',
  templateUrl: './footer-details.component.html',
  styleUrls: ['./footer-details.component.css']
})
export class FooterDetailsComponent implements OnChanges, OnInit{
  
   ngOnInit(): void {
     
   }

   calculatedData = 100;

   ngOnChanges(changes: SimpleChanges): void {
    const newValue = changes['inputData'].currentValue;
    this.calculatedData += newValue;
   }
   @Input() inputData: number = 0;
}
