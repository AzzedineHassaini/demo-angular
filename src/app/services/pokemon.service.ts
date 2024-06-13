import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, switchMap} from "rxjs";
import {PokemonModel, PokemonResult} from "../models/pokemon.model";
import {PokemonPageModel} from "../models/pokemon.page.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly _http: HttpClient) { }

  getOnePage(url: string): Observable<PokemonPageModel>{
    return this._http.get<PokemonPageModel>(url);
  }

  getOne(id: number): Observable<PokemonModel> {
    // Interpolation, backtick (Alt.gr + µ)
    return this._http.get<PokemonModel>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getOneByUrl(url: string): Observable<PokemonModel> {
    return this._http.get<PokemonModel>(url);
  }

  getMany(url: string): Observable<PokemonResult> {
    return this._http.get<PokemonResult>(url).pipe(
      switchMap( data => {

        const detailRequests = data.results.map(
          (pokemonSimple) => this._http.get<any>(pokemonSimple.url).pipe(
            map(result => ({
              ...pokemonSimple,
              imgUrl: result.sprites.other.showdown.front_default
            }))
          )
        );

        return forkJoin(detailRequests).pipe(
          map( detailedPokemons => ({
            ...data,
            results: detailedPokemons
          }))
        )

      })
    );
  }

}
