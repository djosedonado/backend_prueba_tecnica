import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroLlegada } from 'src/registro-ingreso/entity/registroLlegadas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListarRegistroIngresoService {
  constructor(
    @InjectRepository(RegistroLlegada)
    private registroRepository: Repository<RegistroLlegada>,
  ) {}

  listarRegistrosEntrada() {
    try {
      return this.registroRepository.find();
    } catch (error) {
      return error;
    }
  }
}
