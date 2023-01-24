import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { FacturaDto } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styles: [
  ]
})
export class FormularioServicioComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;

  @ViewChild('formServicio') formServicio!: NgForm;
  @Input() esParaModificar: boolean = false;
  @Input() facturaModificable!: FacturaDto;
  @Input() facturaSeleccionadaSubtitulo: string = '';

  @Input() factura: FacturaDto = {
    nombre: '',
    url: '',
    esRepetible: false
  }

  constructor(
    private servicioService: ServicioService,
    private tablaService: TablaServiceService<FacturaDto>
  ) { }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
  }

  cargarFormulario(): void {
    if(!this.esParaModificar){
      this.subscription = this.servicioService.agregar(this.factura).subscribe(
        respuesta => {
          this.formServicio.resetForm();
          this.tablaService.comunicadorFormularioTabla$.next({
            actividad: Actividad.CREAR,
            elemento: respuesta
          });
        }
      )
    } else {
      this.subscription = this.servicioService.modificar(this.factura).subscribe(
        respuesta => {
          this.formServicio.resetForm();
          this.tablaService.comunicadorFormularioTabla$.next({
            actividad: Actividad.MODIFICAR,
            elemento: respuesta
          });
        }
      )
    }
    this.resetear();
  }
  resetear(){
    this.factura = {
      nombre: '',
      url: '',
      esRepetible: false
    }
  }
}
