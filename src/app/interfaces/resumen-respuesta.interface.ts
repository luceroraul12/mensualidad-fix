import { PagoDto } from "./pago.interface";
import { FacturaDto } from "./servicio.interface";

export interface ResumenRespuesta {
    facturasPagadas: FacturaDto[];
    facturasImpagas: FacturaDto[];
    pagosRealizados: PagoDto[];
}

