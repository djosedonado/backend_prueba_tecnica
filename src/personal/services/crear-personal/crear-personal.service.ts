import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from 'src/personal/entity/persona.entity';
import { PersonalDto } from 'src/personal/dto/personal.dto';
import { ListarPersonalService } from '../listar-personal/listar-personal.service';

@Injectable()
export class CrearPersonalService {
  constructor(
    @InjectRepository(Persona) private personaRepository: Repository<Persona>,
    private listarPorId: ListarPersonalService,
  ) {}

  async crearPersonal(personaDto: PersonalDto): Promise<any> {
    const validar = await this.listarPorId.listarPersonasPorId(personaDto.id);
    if (validar) {
      console.log(validar);
      return { message: 'persona ya existe' };
    } else {
      const personal = this.personaRepository.create(personaDto);
      await this.personaRepository.save(personal);
      return { message: 'Persona Creada' };
    }
  }
}
