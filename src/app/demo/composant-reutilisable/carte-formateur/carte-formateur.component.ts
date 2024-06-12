import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Formateur } from '../../../models/formateur';

@Component({
  selector: 'app-carte-formateur',
  templateUrl: './carte-formateur.component.html',
  styleUrl: './carte-formateur.component.scss'
})
export class CarteFormateurComponent {

  @Input({required: true})
  formateur!: Formateur;

  @Output()
  formateurDuJourEvent: EventEmitter<Formateur> = new EventEmitter();

  triggerFormateurDuJour(f: Formateur){
    this.formateurDuJourEvent.emit(f);
  }
}
