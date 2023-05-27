import { Controller, Post, Body } from '@nestjs/common';
import { PersonalDto } from 'src/personal/dto/personal.dto';
import { CrearPersonalService } from 'src/personal/services/crear-personal/crear-personal.service';

@Controller('crear-personal')
export class CrearPersonalController {
  constructor(private readonly crearPersonalServices: CrearPersonalService) {}

  @Post()
  async crearPersonal(@Body() personalDto: PersonalDto) {
    return await this.crearPersonalServices.crearPersonal(personalDto);
  }
}
