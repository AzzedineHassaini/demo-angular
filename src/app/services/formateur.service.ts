import { Injectable } from '@angular/core';
import { Formateur } from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

    private _formateurs: Formateur[] = [
    {
      firstname: 'Sébastien',
      lastname: 'Bya',
      surname: 'Blyat',
      image: './images/seb.png',
      comment: 'Vous pouvez toujours courir!'
    },
    {
      firstname: 'Alexandre',
      lastname: 'Kimtaris',
      surname: 'Red head vegan',
      image: './images/alex.png',
      comment: 'Meat is murder'
    },
    {
      firstname: 'Flavian',
      lastname: 'Ovyn',
      surname: 'Le purgateur',
      image: './images/flavian.png',
      comment: 'Salade de phalange'
    }
  ]

  constructor() {
    console.log('Service created');
    
   }

  get formateurs(): Formateur[]{
    return this._formateurs;
  }
}
