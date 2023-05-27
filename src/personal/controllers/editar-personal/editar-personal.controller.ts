import { Controller, Param, Put } from '@nestjs/common';
import { EditarPersonalService } from 'src/personal/services/editar-personal/editar-personal.service';

@Controller('editar-personal')
export class EditarPersonalController {
  /*
  constructor(private editarPersonalServices: EditarPersonalService) {}
  @Put(':id')
  editarPersonal(@Param('id') id: string, @Body() personalDto: PersonalDto) {
    return await this.editarPersonalServices.editarPersonaPorId(
      id,
      personalDto,
    );
  }
  */
}
