import { Modelo } from "./entidad.interface";

export interface FacturaDto extends Modelo{
    nombre: string;
    url: string;
    esRepetible: boolean;
}