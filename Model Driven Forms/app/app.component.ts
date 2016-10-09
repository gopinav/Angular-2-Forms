import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl : 'app/app.component.html'
})
export class AppComponent { 
  userForm = new FormGroup({
    name: new FormControl('Vishwas'),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl()
    })
  });
  onSubmit(){
    console.log(this.userForm.value);
  }
}
