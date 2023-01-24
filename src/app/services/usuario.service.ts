import { Injectable } from '@angular/core';
import { UsuarioDto } from '../interfaces/usuarioDto.interface';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<UsuarioDto> {
  public override rutaEspecifica: string = 'usuarios';
}
