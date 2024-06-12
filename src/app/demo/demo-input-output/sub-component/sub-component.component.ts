import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrl: './sub-component.component.scss'
})
export class SubComponentComponent {

  @Input()
  parentColor!: string;

  @Output()
  myEvent: EventEmitter<string> = new EventEmitter();

  triggerMyEvent(response: string): void {
    this.myEvent.emit(response);
  }

}
