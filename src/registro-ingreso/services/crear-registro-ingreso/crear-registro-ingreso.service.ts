import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroLlegada } from 'src/registro-ingreso/entity/registroLlegadas.entity';
import { ListarPersonalService } from 'src/personal/services/listar-personal/listar-personal.service';
import { RegistroEntradaDto } from 'src/registro-ingreso/dto/registroEntrada.dto';
import { Repository } from 'typeorm';
@Injectable()
export class CrearRegistroIngresoService {
  constructor(
    @InjectRepository(RegistroLlegada)
    private registroRepository: Repository<RegistroLlegada>,
    private listarPersonalService: ListarPersonalService,
  ) {}

  async crearRegistroIngreso(registro: RegistroEntradaDto) {
    try {
      const personaValide =
        await this.listarPersonalService.listarPersonasPorId(registro.personId);
      if (personaValide==null) {
        return new HttpException('Usuario no encontrado', HttpStatus.FOUND);
      } else {
        const newRegistro = this.registroRepository.create(registro);
        return this.registroRepository.save(newRegistro);
      }
    } catch (error) {
      return error;
    }
  }
}
