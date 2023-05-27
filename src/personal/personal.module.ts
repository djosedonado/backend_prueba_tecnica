import { Module } from '@nestjs/common';
import { CrearPersonalService } from './services/crear-personal/crear-personal.service';
import { CrearPersonalController } from './controllers/crear-personal/crear-personal.controller';
import { ListarPersonalController } from './controllers/listar-personal/listar-personal.controller';
import { EliminarPersonalController } from './controllers/eliminar-personal/eliminar-personal.controller';
import { EditarPersonalController } from './controllers/editar-personal/editar-personal.controller';
import { EditarPersonalService } from './services/editar-personal/editar-personal.service';
import { EliminarPersonalService } from './services/eliminar-personal/eliminar-personal.service';
import { ListarPersonalService } from './services/listar-personal/listar-personal.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './entity/persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Persona])],
  providers: [
    CrearPersonalService,
    EditarPersonalService,
    EliminarPersonalService,
    ListarPersonalService,
  ],
  controllers: [
    CrearPersonalController,
    ListarPersonalController,
    EliminarPersonalController,
  ],
  exports: [ListarPersonalService]
})
export class PersonalModule {}
