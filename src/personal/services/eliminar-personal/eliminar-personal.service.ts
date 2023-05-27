import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from 'src/personal/entity/persona.entity';

@Injectable()
export class EliminarPersonalService {
  constructor(
    @InjectRepository(Persona) private personalRepository: Repository<Persona>,
  ) {}

  async eliminarPersonaPorId(id: string){
    const validacion = await this.personalRepository.findOne({ where: { id: id } });
    if (validacion==null) {
      return new HttpException("No encontrado usuario",HttpStatus.NOT_FOUND);
    } else {
      return await this.personalRepository.delete(id);
    }
  }
}
