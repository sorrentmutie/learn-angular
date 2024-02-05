import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent {

  constructor(private router: Router) {
    
  }

  goBack(){
    this.router.navigate(['/products', "43"]);
  }

}
