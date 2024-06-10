import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrl: './demo-pipe.component.scss'
})
export class DemoPipeComponent {

  myString: string = "Kawanbunga";
  myNumber: number = 42;
  myDate: Date = new Date();
}
