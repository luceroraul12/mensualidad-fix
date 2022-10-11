import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensualidadRoutingModule } from './mensualidad-routing.module';
import { MensualidadComponent } from './mensualidad.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormularioServicioComponent } from './formulario-servicio/formulario-servicio.component';
import { FormularioPagoComponent } from './formulario-pago/formulario-pago.component';
import { TablaServicioComponent } from './tabla-servicio/tabla-servicio.component';
import { TablaPagoComponent } from './tabla-pago/tabla-pago.component';
import { TablaResumenComponent } from './tabla-resumen/tabla-resumen.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MensualidadComponent,
    MenuComponent,
    FormularioServicioComponent,
    FormularioPagoComponent,
    TablaServicioComponent,
    TablaPagoComponent,
    TablaResumenComponent
  ],
  imports: [
    CommonModule,
    MensualidadRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MensualidadModule { }
