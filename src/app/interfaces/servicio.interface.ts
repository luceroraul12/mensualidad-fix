import { Modelo } from "./entidad.interface";

export interface Factura extends Modelo{
    nombre: string;
    url: string;
}