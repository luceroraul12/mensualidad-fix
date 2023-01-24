import { Component, OnInit } from '@angular/core';
import { Boton } from '../interfaces/boton.interface';

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
      accion: () => alert('asignar facturas')
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
