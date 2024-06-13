import { Component } from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {PokemonModel, PokemonResult, PokemonSimple} from "../../models/pokemon.model";

@Component({
  selector: 'app-exo-pokemon-fixed',
  templateUrl: './exo-pokemon-fixed.component.html',
  styleUrl: './exo-pokemon-fixed.component.scss'
})
export class ExoPokemonFixedComponent {

  pokemonResult!: PokemonResult;
  currentPokemon?: PokemonModel;

  constructor(
    private readonly _pokemonService: PokemonService
  ) {
    this.getMany('https://pokeapi.co/api/v2/pokemon');
  }

  getMany(url: string){
    this._pokemonService.getMany(url).subscribe(
      (data) => {
        this.pokemonResult = data;
      }
    )
  }

  previousPage(){
    if (!this.pokemonResult.previous){
      return;
    }
    this.getMany(this.pokemonResult.previous);
  }

  nextPage(){
    if (!this.pokemonResult.next){
      return;
    }
    this.getMany(this.pokemonResult.next);
  }

  getOne(url : string){
    this._pokemonService.getOneByUrl(url).subscribe(
      (data: any) => {
        this.currentPokemon = {
          ...data, //Spread operator, will assign all properties with the same name as in the JSON
          imageUrl: data.sprites.other.dream_world.front_default
        }
      }
    );
  }

}
