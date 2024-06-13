import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {PokemonModel} from "../../models/pokemon.model";

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrl: './demo-http.component.scss'
})
export class DemoHttpComponent {

  currentId!: number;
  pokemon?: PokemonModel;

  constructor(
    private readonly _ar: ActivatedRoute,
    private readonly _pokemonService: PokemonService,
    private readonly _router: Router
  ) {
      this._ar.params.subscribe(
        (p: any) => {
          this.currentId = p.id;
          this._pokemonService.getOne(p.id).subscribe({
            next: (p: any) => {
              this.pokemon = {
                id: p.id,
                name: p.name,
                height: p.height,
                weight: p.weight,
                imageUrl: p.sprites.other.dream_world.front_default
              };
            },
            error: (error: any) => {
              console.log(error);
              this._router.navigate(['/home']);
            }
          });
        }
    );

    // // + used to cast to a number
    // this.currentId = +this._ar.snapshot.params['id'];
    // console.log(this.currentId);



  }

  previousPokemon(){
    this.currentId --;
    this._router.navigate([`/demo/demo07/${this.currentId}`])
  }

  nextPokemon(){
    this.currentId ++;
    this._router.navigate([`/demo/demo07/${this.currentId}`])
  }

}
