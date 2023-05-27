import { Module } from '@nestjs/common';
import { CrearRegistroIngresoController } from './controllers/crear-registro-ingreso/crear-registro-ingreso.controller';
import { CrearRegistroIngresoService } from './services/crear-registro-ingreso/crear-registro-ingreso.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroLlegada } from 'src/registro-ingreso/entity/registroLlegadas.entity';
import { PersonalModule } from 'src/personal/personal.module';
import { ListarRegistroIngresoService } from './services/listar-registro-ingreso/listar-registro-ingreso.service';
import { ListarRegistroIngresoController } from './controllers/listar-registro-ingreso/listar-registro-ingreso.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroLlegada]),PersonalModule],
  providers: [CrearRegistroIngresoService, ListarRegistroIngresoService],
  controllers: [CrearRegistroIngresoController, ListarRegistroIngresoController],
})
export class RegistroIngresoModule {}
