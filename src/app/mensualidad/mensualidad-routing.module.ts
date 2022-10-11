import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensualidadComponent } from './mensualidad.component';

const routes: Routes = [
  {
    path: '',
    component: MensualidadComponent
  },
  {
    path: 'formularioServicio'
  },
  {
    path: 'formularioPago'
  },
  {
    path: 'tablaServicio'
  },
  {
    path: 'tablaPago'
  },
  {
    path: 'tablaResumen'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensualidadRoutingModule { }
