import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pago } from 'src/app/interfaces/pago.interface';
import { Factura } from 'src/app/interfaces/servicio.interface';
import { PagoService } from 'src/app/services/pago.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';

@Component({
  selector: 'app-resumen-dialog-pago',
  templateUrl: './resumen-dialog-pago.component.html',
  styleUrls: ['./resumen-dialog-pago.component.css']
})
export class ResumenDialogPagoComponent implements OnInit {


  constructor(
    private dialogRef: MatDialogRef<ResumenDialogPagoComponent>,
    @Inject(MAT_DIALOG_DATA) public facturaSeleccionada: Factura,
    private tablaService: TablaServiceService<Pago>
  ) { }

  ngOnInit(): void {
    this.tablaService.comunicadorFormularioTabla$.subscribe(
      pago => this.dialogRef.close()
    )
  }


}
