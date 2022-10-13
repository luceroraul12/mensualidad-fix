import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs/internal/operators/subscribeOn';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';



@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styles: [
  ]
})
export class FormularioPagoComponent implements OnInit {

  public serviciosDisponibles!: Servicio[];

  @ViewChild("formPago") formPago!: NgForm;

  constructor(
    private servicioService: ServicioService

  ) { }

  ngOnInit(): void {
    this.servicioService.leer().subscribe(
      (servicios: Servicio[]) => this.serviciosDisponibles = servicios
    )
  }


  cargarFormulario(): void {
    console.log(this.formPago.value);
    this.formPago.resetForm();
  }
}
