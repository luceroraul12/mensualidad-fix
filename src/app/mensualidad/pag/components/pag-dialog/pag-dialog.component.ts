import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pago } from 'src/app/interfaces/pago.interface';

@Component({
  selector: 'app-pag-dialog',
  templateUrl: './pag-dialog.component.html',
  styleUrls: ['./pag-dialog.component.css']
})
export class PagDialogComponent implements OnInit {

  public pagoCopia: Pago = {...this.data.pago};
  public esVer: boolean = false;

  constructor(
    private ref: MatDialogRef<PagDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.esVer = this.data.esVer;
  }

}
