import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.scss'
})
export class DemoDirectivesComponent {

  isDayTime: boolean = true;
  nbJour: number = new Date().getDay();
  names: string[] = ["Pierre","Pol","Jacques"]


  toggleIsDayTime(){
    this.isDayTime =! this.isDayTime
  }

}
