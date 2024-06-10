import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.scss'
})
export class DemoBindingsComponent {

  firstname: string = "Roger";
  isActive: boolean = true;

  saySapristi(){
    alert("Sapristi!!!");
  }

  toggleIsActive(){
    this.isActive = !this.isActive;
  }
}
