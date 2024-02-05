import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from './myValidation';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    myForm: FormGroup | undefined = undefined;

    constructor(private fb: FormBuilder) {
     this.myForm = fb.group({
        name: ['', [Validators.required, Validators.minLength(5), MyValidator]],
        surname: ['']
      });
    }

    submit() {
    }
    
    // rièrendi da 
    get myName() {return this.myForm?.get("name");}


}
