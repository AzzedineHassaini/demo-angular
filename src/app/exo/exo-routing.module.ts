import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';

const routes: Routes = [
  {path:'', children:[
    {path:'exo01',component: ExoTimerComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
