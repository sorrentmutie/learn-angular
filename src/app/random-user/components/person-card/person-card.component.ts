import { Component, Input } from '@angular/core';
import { Result } from '../../models/random-user';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {
   @Input() person: Result | undefined = undefined
}
