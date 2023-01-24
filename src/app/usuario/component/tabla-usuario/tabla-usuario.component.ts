import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/app/interfaces/usuarioDto.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css']
})
export class TablaUsuarioComponent implements OnInit {
  public displayedColumns: string[] = ['usuario','acciones'];
  public usuarios!: UsuarioDto[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.leer().subscribe(
      respuesta => this.usuarios = respuesta,
      error => alert("problemas al obtener los usuarios")
    )
  }

  eliminar(usuario: UsuarioDto): void {

  }

  dialogModificar(usuario: UsuarioDto): void {

  }

  clickearRenglon(usuario: UsuarioDto): void {

  }
}
