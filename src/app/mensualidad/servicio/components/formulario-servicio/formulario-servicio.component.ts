import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Servicio } from 'src/app/interfaces/servicio.interface';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styles: [
  ]
})
export class FormularioServicioComponent implements OnInit {

  @ViewChild('formServicio') formServicio!: NgForm;

  constructor(
    private servicioService: ServicioService
  ) { }

  ngOnInit(): void {
  }

  cargarFormulario(): void {
    console.log(this.formServicio.value);
    this.formServicio.resetForm();

    let nombreServicio, urlServicio: string;
    nombreServicio = this.formServicio.controls['servicio'].value;
    urlServicio = this.formServicio.controls['url'].value;
    let servicio: Servicio = {
      nombre: nombreServicio,
      url: urlServicio
    }
    this.servicioService.agregar(servicio).subscribe(
      respuesta => {
        console.log('servicio registrado');
      }
    )
  }

}
