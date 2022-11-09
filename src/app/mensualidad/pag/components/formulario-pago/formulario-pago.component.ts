import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs/internal/operators/subscribeOn';
import { Actividad } from 'src/app/interfaces/informacionFormularioTabla.interface';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
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

  @ViewChild("formPago") formPago!: NgForm;

  public pagoCreado!: Pago;

  public hoy = new FormControl(new Date());

  constructor(
    private servicioService: ServicioService,
    private pagoService: PagoService,
    private tablaService: TablaServiceService<Pago>

  ) { }

  ngOnInit(): void {
    if(!this.usaFacturasPersonalizadas){
      this.servicioService.leer().subscribe(
        (servicios: Factura[]) => this.serviciosDisponibles = servicios
      )
    };
    this.pagoCreado = {
      factura: {
        nombre: '',
        url: ''
      },
      fechaDePago: new Date(),
    };
    this.resetear();
  }


  cargarFormulario(): void {
    console.log(this.formPago.value);
    this.pagoCreado.factura = this.formPago.controls['servicio'].value;

    this.pagoService.agregar(this.pagoCreado).subscribe( respuesta => {
      this.tablaService.comunicadorFormularioTabla$.next({
        actividad: Actividad.CREAR,
        elemento: respuesta
      });
      this.resetear();
    });
    
  }

  resetear():void {
    this.formPago.resetForm();
    this.pagoCreado.fechaDePago = new Date();
  }
}
