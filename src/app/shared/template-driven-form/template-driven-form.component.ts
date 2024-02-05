import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
   user= new User(1, "mario rossi", "admin");
   roles = ["admin", "guest", "user"];
   

   submit(){

   }
  }