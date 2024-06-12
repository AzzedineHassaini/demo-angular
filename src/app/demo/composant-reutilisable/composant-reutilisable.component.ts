import { Component } from '@angular/core';
import { Formateur } from '../../models/formateur';
import { FormateurService } from '../../services/formateur.service';

@Component({
  selector: 'app-composant-reutilisable',
  templateUrl: './composant-reutilisable.component.html',
  styleUrl: './composant-reutilisable.component.scss'
})
export class ComposantReutilisableComponent {

  formateurDuJour?: Formateur;
  formateurs!: Formateur[];

  constructor(private readonly _formateurService: FormateurService){
    this.formateurs = _formateurService.formateurs;
  }

  reactToFormateurDuJour(f: Formateur){
    this.formateurDuJour = f;
  }
}
