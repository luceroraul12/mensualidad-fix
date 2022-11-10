import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Factura } from 'src/app/interfaces/servicio.interface';

@Component({
  selector: 'app-servicio-dialog-tabla-formulario',
  templateUrl: './servicio-dialog-tabla-formulario.component.html',
  styleUrls: ['./servicio-dialog-tabla-formulario.component.css']
})
export class ServicioDialogTablaFormularioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ServicioDialogTablaFormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public factura: Factura
  ) { }

  ngOnInit(): void {
  }

}
