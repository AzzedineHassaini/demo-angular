import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import {ExoShoppingListComponent} from "./exo-shopping-list/exo-shopping-list.component";
import {ListPokemonComponent} from "./exo-pokemon/list-pokemon.component";
import {ExoPokemonFixedComponent} from "./exo-pokemon-fixed/exo-pokemon-fixed.component";

const routes: Routes = [
  {path:'', children:[
    {path:'exo01',component: ExoTimerComponent},
    {path:'exo02',component: ExoShoppingListComponent},
    {path:'exo03/:id',component: ListPokemonComponent},
    {path:'exo04',component: ExoPokemonFixedComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
