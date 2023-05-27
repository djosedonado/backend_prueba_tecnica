import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalDto } from 'src/personal/dto/personal.dto';
import { Persona } from 'src/personal/entity/persona.entity';

@Injectable()
export class EditarPersonalService {
  constructor(
    @InjectRepository(Persona)
    private readonly personalRepository: Repository<Persona>,
  ) {}

  editarPersonaPorId(id: string, editarPersonalDto: PersonalDto) {
    try {
      const persona = this.personalRepository.update(id, editarPersonalDto);
      return persona;
    } catch (error) {
      return error;
    }
  }
}
