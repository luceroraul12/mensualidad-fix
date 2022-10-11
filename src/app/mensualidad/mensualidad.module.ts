import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensualidadRoutingModule } from './mensualidad-routing.module';
import { MensualidadComponent } from './mensualidad.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MensualidadComponent
  ],
  imports: [
    CommonModule,
    MensualidadRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MensualidadModule { }
