import {PokemonModel} from "./pokemon.model";

export interface PokemonPageModel {

  next: string;
  previous: string;
  pokemons: PokemonModel[];

}
