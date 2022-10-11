import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensualidadComponent } from './mensualidad.component';

const routes: Routes = [
  {
    path: '',
    component: MensualidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensualidadRoutingModule { }
