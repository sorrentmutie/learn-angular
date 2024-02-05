import { Component } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { RandomUserResponse, Result } from '../../models/random-user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-random-user-page',
  templateUrl: './random-user-page.component.html',
  styleUrls: ['./random-user-page.component.css']
})
export class RandomUserPageComponent {

   results: Observable<Result[]> | undefined;

   constructor(private service: RandomUserService) {
     this.results = this.service.getResults("10");
   }
}
