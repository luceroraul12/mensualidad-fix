import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styles: [
  ]
})
export class FormularioServicioComponent implements OnInit {

  @ViewChild('formServicio') formServicio!: NgForm;

  public facturaParaCrear: Factura = {
    nombre: '',
    url: ''
  }

  constructor(
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
  }

  cargarFormulario(): void {
    console.log("servicio a registrar",this.facturaParaCrear);
    
    this.servicioService.agregar(this.facturaParaCrear).subscribe(
      respuesta => {
        console.log('servicio registrado', respuesta);
        this.formServicio.resetForm();

      }
    )
  }

}
