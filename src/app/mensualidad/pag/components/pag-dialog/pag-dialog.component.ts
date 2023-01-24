import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PagoDto } from 'src/app/interfaces/pago.interface';
import { ComunicadorService } from 'src/app/services/comunicador.service';
import { TablaServiceService } from 'src/app/services/tabla-service.service';

@Component({
  selector: 'app-pag-dialog',
  templateUrl: './pag-dialog.component.html',
  styleUrls: ['./pag-dialog.component.css']
})
export class PagDialogComponent implements OnInit {

  public pagoCopia: PagoDto = {...this.data.pago};
  public esVer: boolean = false;

  constructor(
    private ref: MatDialogRef<PagDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tablaService: TablaServiceService<PagoDto>
  ) { }

  ngOnInit(): void {
    this.esVer = this.data.esVer;
    this.tablaService.comunicadorFormularioTabla$.subscribe(respuesta => this.ref.close())
  }

}
