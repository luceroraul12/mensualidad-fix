import { Component, Input, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/app/interfaces/usuarioDto.interface';
import { UsuarioComunicacionService } from 'src/app/services/usuario-comunicacion.service';

@Component({
  selector: 'app-deslizador-usuario',
  templateUrl: './deslizador-usuario.component.html',
  styleUrls: ['./deslizador-usuario.component.css']
})
export class DeslizadorUsuarioComponent implements OnInit {
  @Input() usuario!: UsuarioDto;
  @Input() porcentaje!: number;

  constructor(
    private usuarioComunicadorService: UsuarioComunicacionService
  ) { }

  ngOnInit(): void {
  }

  actualizar(): void {
    this.usuarioComunicadorService.comunicador$.next(this.usuario);
  }
}
