import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPagoComponent } from './components/formulario-pago/formulario-pago.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { TablaPagoComponent } from './components/tabla-pago/tabla-pago.component';
import { TablaResumenComponent } from './components/tabla-resumen/tabla-resumen.component';
import { TablaServicioComponent } from './components/tabla-servicio/tabla-servicio.component';
import { MensualidadComponent } from './mensualidad.component';
import { PagComponent } from './pag/pag.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ServicioComponent } from './servicio/servicio.component';

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
        path: '**',
        redirectTo: ''
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensualidadRoutingModule { }
