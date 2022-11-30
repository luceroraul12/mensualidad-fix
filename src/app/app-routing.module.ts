import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mensualidad',
    loadChildren: () => import('./mensualidad/mensualidad.module').then(m => m.MensualidadModule)
  },
  {
    path: '**',
    redirectTo: 'mensualidad'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
