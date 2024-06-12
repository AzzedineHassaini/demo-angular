import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { DemoBindingsComponent } from './demo-bindings/demo-bindings.component';
import { SharedModule } from '../shared/shared.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoInputOutputComponent } from './demo-input-output/demo-input-output.component';
import { SubComponentComponent } from './demo-input-output/sub-component/sub-component.component';


@NgModule({
  declarations: [
    DemoComponent,
    DemoBindingsComponent,
    DemoPipeComponent,
    DemoDirectivesComponent,
    DemoInputOutputComponent,
    SubComponentComponent,
  ],
  exports: [
    SubComponentComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
