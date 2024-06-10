import { Component } from '@angular/core';

@Component({
  selector: 'app-exo-timer',
  templateUrl: './exo-timer.component.html',
  styleUrl: './exo-timer.component.scss'
})
export class ExoTimerComponent {

  timerValue: number = 0;
  startIsActive: boolean = true;
  pauseIsActive: boolean = false;
  resetIsActive: boolean = false;
  intervalId: any;

  timerStart(){
    this.startIsActive = false;
    this.pauseIsActive = true;
    this.resetIsActive = true;
    if (this.intervalId != undefined) { return ;}
    this.intervalId = setInterval(() => this.updateTimer(), 1000);
  }

  timerPause() {
    this.startIsActive = true;
    this.pauseIsActive = false;
    if (this.intervalId === undefined) { return ;}
    this.intervalId = null;
    clearInterval(this.intervalId);
  }

  timerReset() {
    this.timerValue = 0;
  }

  updateTimer(){
    this.timerValue ++;
  }

}
