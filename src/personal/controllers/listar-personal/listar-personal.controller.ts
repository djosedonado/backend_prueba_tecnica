import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonalDto } from 'src/personal/dto/personal.dto';
import { Persona } from 'src/personal/entity/persona.entity';
import { ListarPersonalService } from 'src/personal/services/listar-personal/listar-personal.service';

@Controller('listar-personal')
export class ListarPersonalController {
  constructor(private readonly listarPersonalService: ListarPersonalService) {}
  //Metodo de listar todos los datos
  @Get('/')
  listarPersonal() {
    return this.listarPersonalService.listarPersonas();
  }

  //Metodo de listar por identificacion
  @Get('/id/:id')
  listarPersonalPorId(@Param('id') id: string): Promise<PersonalDto> {
    try {
      return this.listarPersonalService.listarPersonasPorId(id);
    } catch (error) {
      return error;
    }
  }
  //Metodo de listar por Nombre
  @Get('/name/:name')
  listarPersonalPorNombre(@Param('name') name: string): Promise<PersonalDto[]> {
    try {
      return this.listarPersonalService.listarPersonasPorName(name);
    } catch (error) {
      return error;
    }
  }

   //Metodo de listar por Apellido
   @Get('/name/:surname')
   listarPersonalPorApellido(@Param('surname') surname: string): Promise<PersonalDto[]> {
     try {
       return this.listarPersonalService.listarPersonasPorName(surname);
     } catch (error) {
       return error;
     }
   }
}
