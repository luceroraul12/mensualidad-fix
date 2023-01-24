import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/app/interfaces/usuarioDto.interface';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {
  public displayedColumns: string[] = ['usuario','acciones'];
  public usuarios!: UsuarioDto[];

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(usuario: UsuarioDto): void {

  }

  dialogModificar(usuario: UsuarioDto): void {

  }

  clickearRenglon(usuario: UsuarioDto): void {

  }
}
