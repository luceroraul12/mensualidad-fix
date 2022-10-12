import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioPagoComponent } from './components/formulario-pago/formulario-pago.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { TablaPagoComponent } from './components/tabla-pago/tabla-pago.component';
import { TablaResumenComponent } from './components/tabla-resumen/tabla-resumen.component';
import { TablaServicioComponent } from './components/tabla-servicio/tabla-servicio.component';
import { MensualidadComponent } from './mensualidad.component';

const routes: Routes = [
  {
    path: '',
    component: MensualidadComponent,
    children: [
      {
        path: 'formularioServicio',
        component: FormularioServicioComponent
      },
      {
        path: 'formularioPago',
        component: FormularioPagoComponent
      },
      {
        path: 'tablaServicio',
        component: TablaServicioComponent
      },
      {
        path: 'tablaPago',
        component: TablaPagoComponent
      },
      {
        path: 'tablaResumen',
        component: TablaResumenComponent
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
