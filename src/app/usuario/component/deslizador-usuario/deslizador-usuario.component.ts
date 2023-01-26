import { Component, Input, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/app/interfaces/usuarioDto.interface';

@Component({
  selector: 'app-deslizador-usuario',
  templateUrl: './deslizador-usuario.component.html',
  styleUrls: ['./deslizador-usuario.component.css']
})
export class DeslizadorUsuarioComponent implements OnInit {
  @Input() usuario!: UsuarioDto;

  constructor() { }

  ngOnInit(): void {
  }

}
