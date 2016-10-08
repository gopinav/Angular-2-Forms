import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: [`
    input.ng-invalid{border-left: 5px solid red;}
    .ng-valid[required]{border-left: 5px solid green;}
  `]
})
export class AppComponent {
  public myName = 'Vishwas';
  onSubmit(value: any){
    console.log(value);
  }
 }
