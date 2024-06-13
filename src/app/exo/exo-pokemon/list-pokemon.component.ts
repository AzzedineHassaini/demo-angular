import {Component} from '@angular/core';
import {PokemonPageModel} from "../../models/pokemon.page.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {PokemonModel} from "../../models/pokemon.model";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.scss'
})
export class ListPokemonComponent {

  url: string = 'https://pokeapi.co/api/v2/pokemon';

  pokemonPage: PokemonPageModel;
  pokemon: PokemonModel

  constructor(
    private readonly _ar: ActivatedRoute,
    private readonly _pokemonService: PokemonService,
    private readonly _router: Router
  ) {
    this.pokemonPage = {next: '', previous: '', pokemons: []};
    this.pokemon = {name: '', id: 0, height: 0, weight: 0, imageUrl: ''};
    this._ar.params.subscribe(
      (p: any) => {
        this._pokemonService.getOnePage(this.url).subscribe({
          next: (p: any) => {
            this.pokemonPage = {
              previous: p.previous,
              next: p.next,
              pokemons: []
            }
            for (let i = 0; i < p.results.length; i++) {
              console.log(p.results[i]);
              this._pokemonService.getOneByUrl(p.results[i].url).subscribe({
                next: (p: any) => {
                  const pokemon: PokemonModel = {
                      id: p.id,
                      name: p.name,
                      height: p.height,
                      weight: p.weight,
                      imageUrl: p.sprites.other.dream_world.front_default
                  }
                  this.pokemonPage.pokemons.push(pokemon);
                },
                error: (error: any) => {
                  console.log(error);
                  this._router.navigate(['/home']);
                }
              })
            }
          },
          error: (error: any) => {
            console.log(error);
            this._router.navigate(['/home']);
          }
        });
      }
    );
    this.viewPokemon(this.pokemonPage.pokemons[0]);
  }

  previousPage(){
    this.url = this.pokemonPage.previous;
    this._router.navigate([`/exo/exo03/0`])
  }

  nextPage(){
    this.url = this.pokemonPage.next;
    this._router.navigate([`/exo/exo03/0`])
  }

  viewPokemon(pokemonToView: PokemonModel){
    this.pokemon = pokemonToView;
  }

}
