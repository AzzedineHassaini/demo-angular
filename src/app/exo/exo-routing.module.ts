import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import {ExoShoppingListComponent} from "./exo-shopping-list/exo-shopping-list.component";

const routes: Routes = [
  {path:'', children:[
    {path:'exo01',component: ExoTimerComponent},
    {path:'exo02',component: ExoShoppingListComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
