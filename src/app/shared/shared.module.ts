import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BotoneraTablaComponent } from './botonera-tabla/botonera-tabla.component';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [
  
    BotoneraTablaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    BotoneraTablaComponent
  ]
})
export class SharedModule { }
