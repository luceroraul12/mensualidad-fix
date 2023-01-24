import { PagoDto } from "./pago.interface";
import { FacturaDto } from "./servicio.interface";

export interface ResumenDto {
    facturasPagadas: FacturaDto[];
    facturasImpagas: FacturaDto[];
    pagosPagados:    PagoDto[];
}
