import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import {DemoDirectivesComponent} from "./demo-directives/demo-directives.component";
import {DemoInputOutputComponent} from "./demo-input-output/demo-input-output.component";
import {ComposantReutilisableComponent} from "./composant-reutilisable/composant-reutilisable.component";
import {DemoFormulairesComponent} from "./demo-formulaires/demo-formulaires.component";
import {DemoHttpComponent} from "./demo-http/demo-http.component";

const routes: Routes = [
  { path: '', component: DemoComponent, children: [
    { path: 'demo01',component: DemoBindingsComponent},
    { path: 'demo02',component: DemoPipeComponent},
    { path: 'demo03',component: DemoDirectivesComponent},
    { path: 'demo04',component: DemoInputOutputComponent},
    { path: 'demo05', component: ComposantReutilisableComponent},
    { path: 'demo06', component: DemoFormulairesComponent},
    { path: 'demo07/:id', component: DemoHttpComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
