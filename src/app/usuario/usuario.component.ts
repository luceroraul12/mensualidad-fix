import { Component, OnInit } from '@angular/core';
import { Boton } from '../interfaces/boton.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogPorcentajeUsuarioComponent } from './component/dialog-porcentaje-usuario/dialog-porcentaje-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public botones: Boton[] = [
    {
      titulo: 'Crear Usuario',
      accion: () => alert('crear usuario')
    },
    {
      titulo: 'Asignar Porcentaje de Facturas',
      accion: () => this.abrirDialogPorcentajes()
    }
  ]

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  abrirDialogPorcentajes(): void {
    this.dialog.open(DialogPorcentajeUsuarioComponent);
  }
}
