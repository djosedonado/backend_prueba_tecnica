import { Body, Controller, Post } from '@nestjs/common';
import { RegistroEntradaDto } from 'src/registro-ingreso/dto/registroEntrada.dto';
import { CrearRegistroIngresoService } from 'src/registro-ingreso/services/crear-registro-ingreso/crear-registro-ingreso.service';

@Controller('crear-registro-ingreso')
export class CrearRegistroIngresoController {
    constructor(private registroServices: CrearRegistroIngresoService){}

    @Post('/InputOutput')
    crearRegistroIngreso(@Body() entrada: RegistroEntradaDto){
        return this.registroServices.crearRegistroIngreso(entrada);
    }
    

}
