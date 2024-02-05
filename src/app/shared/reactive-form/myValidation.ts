import { AbstractControl } from "@angular/forms";

export function MyValidator(control: AbstractControl) {
  if(!control.value.startsWith('S')) {
      return {
        myValidator: true
      }
  }
  return null;
}