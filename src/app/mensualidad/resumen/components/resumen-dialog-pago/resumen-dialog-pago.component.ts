import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Factura } from 'src/app/interfaces/servicio.interface';

@Component({
  selector: 'app-resumen-dialog-pago',
  templateUrl: './resumen-dialog-pago.component.html',
  styleUrls: ['./resumen-dialog-pago.component.css']
})
export class ResumenDialogPagoComponent implements OnInit {


  constructor(
    private dialogRef: MatDialogRef<ResumenDialogPagoComponent>,
    @Inject(MAT_DIALOG_DATA) public facturaSeleccionada: Factura 
  ) { }

  ngOnInit(): void {
  }


}
