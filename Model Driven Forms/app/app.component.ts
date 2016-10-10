import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl : 'app/app.component.html'
})
export class AppComponent { 
  userForm = new FormGroup({
    name: new FormControl('Vishwas', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(90210, Validators.pattern('^[1-9][0-9]{4}$'))
    })
  });
  onSubmit(){
    console.log(this.userForm.value);
  }
}
