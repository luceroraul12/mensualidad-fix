import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs/internal/operators/subscribeOn';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { PagoService } from 'src/app/services/pago.service';
import { ServicioService } from 'src/app/services/servicio.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';



@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styles: [
  ]
})
export class FormularioPagoComponent implements OnInit {

  @Input() serviciosDisponibles!: Factura[];
  @Input() usaFacturasPersonalizadas: boolean = false;

  @Input() esParaModificar: boolean = false;
  @Input() pagoCreado!: Pago;


  @ViewChild("formPago") formPago!: NgForm;


  public fechaEmitida: Date = new Date();

  constructor(
    private servicioService: ServicioService,
    private pagoService: PagoService,
    private tablaService: TablaServiceService<Pago>,
    private comunicadorService: ComunicadorService

  ) { 
    this.resetear();
   }

  ngOnInit(): void {
    //TODO: ver de arreglar esto, no deberia existir facturas personalizadas sino que Es para resumen
    //funcionamiento normal, cuando no tiene facturas personalizadas ni para modificar
    if(!this.usaFacturasPersonalizadas && !this.esParaModificar){
      this.servicioService.leer().subscribe(
        (servicios: Factura[]) => this.serviciosDisponibles = servicios
      )
    } else if(this.esParaModificar){
      this.serviciosDisponibles = [this.pagoCreado.factura];
    };

    //para especificar la fecha del formulario desde resumen
    this.comunicadorService.fechaResumen$.subscribe(
      fecha => this.fechaEmitida = fecha
    )


  }


  cargarFormulario(): void {
    console.log(this.formPago.value);
    this.pagoCreado.factura = this.formPago.controls['servicio'].value;

    if(!this.esParaModificar){
      this.pagoService.agregar(this.pagoCreado).subscribe( respuesta => {
        this.tablaService.comunicadorFormularioTabla$.next({
          actividad: Actividad.CREAR,
          elemento: respuesta
        });
        this.resetear();
      });
    } else {
      this.pagoService.modificar(this.pagoCreado).subscribe(
        respuesta => {
          this.tablaService.comunicadorFormularioTabla$.next({
            actividad: Actividad.MODIFICAR,
            elemento: respuesta
          });
        }
      );
    }


    
  }

  resetear():void {
    let factura: Factura = this.serviciosDisponibles ? this.serviciosDisponibles[0] :{nombre: '', url: ''};
    
    this.pagoCreado = {
      factura: factura,
      fechaDePago: this.esParaModificar ? this.pagoCreado.fechaDePago : this.fechaEmitida,
      comentario: ''
    };
  }
}
