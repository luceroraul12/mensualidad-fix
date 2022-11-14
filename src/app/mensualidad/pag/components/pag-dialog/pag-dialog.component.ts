import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pago } from 'src/app/interfaces/pago.interface';

@Component({
  selector: 'app-pag-dialog',
  templateUrl: './pag-dialog.component.html',
  styleUrls: ['./pag-dialog.component.css']
})
export class PagDialogComponent implements OnInit {

  public pagoCopia: Pago = {...this.pago};

  constructor(
    private ref: MatDialogRef<PagDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public pago: Pago
  ) { }

  ngOnInit(): void {
  }

}
