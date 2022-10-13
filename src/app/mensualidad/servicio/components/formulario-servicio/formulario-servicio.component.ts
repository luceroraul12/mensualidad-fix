import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-servicio',
  templateUrl: './formulario-servicio.component.html',
  styles: [
  ]
})
export class FormularioServicioComponent implements OnInit {

  @ViewChild('formServicio') formServicio!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  cargarFormulario(): void {
    console.log(this.formServicio.value);
    this.formServicio.resetForm();
  }

}
