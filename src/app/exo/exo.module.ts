import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import {SharedModule} from "../shared/shared.module";
import { ExoShoppingListComponent } from './exo-shopping-list/exo-shopping-list.component';
import { CartComponent } from './exo-shopping-list/cart/cart.component';
import {DemoModule} from "../demo/demo.module";
import { ItemComponent } from './exo-shopping-list/item/item.component';
import { ListPokemonComponent } from './exo-pokemon/list-pokemon.component';
import { ExoPokemonFixedComponent } from './exo-pokemon-fixed/exo-pokemon-fixed.component';


@NgModule({
  declarations: [
    ExoTimerComponent,
    ExoShoppingListComponent,
    CartComponent,
    ItemComponent,
    ListPokemonComponent,
    ExoPokemonFixedComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule,
    DemoModule
  ]
})
export class ExoModule { }
