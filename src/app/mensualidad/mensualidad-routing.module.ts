import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensualidadComponent } from './mensualidad.component';
import { PagComponent } from './pag/pag.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ServicioComponent } from './servicio/servicio.component';
import { UsuarioComponent } from '../usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: MensualidadComponent,
    children: [
      {
        path: 'servicios',
        component: ServicioComponent
      },
      {
        path: 'pagos',
        component: PagComponent
      },
      {
        path: 'resumenes',
        component: ResumenComponent
      },
      {
        path: "usuarios",
        component: UsuarioComponent
      },
      {
        path: '**',
        redirectTo: 'resumenes'
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensualidadRoutingModule { }
