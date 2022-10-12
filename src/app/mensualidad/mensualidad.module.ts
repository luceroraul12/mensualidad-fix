import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensualidadRoutingModule } from './mensualidad-routing.module';
import { MensualidadComponent } from './mensualidad.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormularioPagoComponent } from './components/formulario-pago/formulario-pago.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioServicioComponent } from './components/formulario-servicio/formulario-servicio.component';
import { TablaPagoComponent } from './components/tabla-pago/tabla-pago.component';
import { TablaResumenComponent } from './components/tabla-resumen/tabla-resumen.component';
import { TablaServicioComponent } from './components/tabla-servicio/tabla-servicio.component';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    SharedModule,
    FlexLayoutModule
  ]
})
export class MensualidadModule { }
