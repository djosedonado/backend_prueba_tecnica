import { Controller, Get } from '@nestjs/common';
import { ListarRegistroIngresoService } from 'src/registro-ingreso/services/listar-registro-ingreso/listar-registro-ingreso.service';

@Controller('listar-registro-ingreso')
export class ListarRegistroIngresoController {
    constructor(private registrosServices: ListarRegistroIngresoService){}

    @Get()
    listarRegistros(){
        try {
            return this.registrosServices.listarRegistrosEntrada();
        } catch (error) {
            return error;
        }
    }
}
