import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalDto } from 'src/personal/dto/personal.dto';
import { Persona } from 'src/personal/entity/persona.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListarPersonalService {
  constructor(
    @InjectRepository(Persona)
    private usersRepository: Repository<Persona>,
  ) {}

  listarPersonas(): Promise<PersonalDto[]> {
    try {
      const personal = this.usersRepository.find();
      return personal;
    } catch (error) {
      return error;
    }
  }

  listarPersonasPorId(id: string): Promise<PersonalDto> {
    try {
      const personal = this.usersRepository.findOne({
        where: {
          id: id,
        },
      });
      return personal;
    } catch (error) {
      return error;
    }
  }

  validarPersonasPorId(id: string): Promise<PersonalDto | null> {
    try {
      const personal = this.usersRepository.findOneBy({ id: id });
      return personal;
    } catch (error) {
      return error;
    }
  }

  listarPersonasPorName(Name: string): Promise<PersonalDto[]> {
    try {
      return this.usersRepository.find({
        where: {
          name: Name,
        },
      });
    } catch (error) {
      return error;
    }
  }

  listarPersonasPorSurname(surname: string): Promise<PersonalDto[]> {
    try {
      return this.usersRepository.find({
        where: {
          surname: surname,
        },
      });
    } catch (error) {
      return error;
    }
  }
}
