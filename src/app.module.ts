import { Module } from '@nestjs/common';
import { PersonalModule } from './personal/personal.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Persona } from './personal/entity/persona.entity';
import { RegistroIngresoModule } from './registro-ingreso/registro-ingreso.module';

@Module({
  imports: [
    PersonalModule,
    TypeOrmModule.forRoot({
      //configuraciones de DB
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'prueba',
      entities: [__dirname + '*/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RegistroIngresoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
