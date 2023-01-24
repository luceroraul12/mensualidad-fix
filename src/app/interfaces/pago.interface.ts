import { Modelo } from "./entidad.interface";

export interface PagoDto extends Modelo {
    id?: number;
    pago?: number;
    idFactura?: number;
    factura?: string;
    fechaDePago?: Date;
    urlFactura?: string;
    comentario?: string;
}