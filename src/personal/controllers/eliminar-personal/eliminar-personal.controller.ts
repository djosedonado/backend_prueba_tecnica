import { Body, Controller, Delete, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { EliminarPersonalService } from 'src/personal/services/eliminar-personal/eliminar-personal.service';
import { ListarPersonalService } from 'src/personal/services/listar-personal/listar-personal.service';

@Controller('eliminar-personal')
export class EliminarPersonalController {
  constructor(
    private readonly eliminarPersonalService: EliminarPersonalService
  ) {}

  @Delete(':id')
  async crearPersonal(@Param('id') id: string,@Res() res) {
    const persona = await this.eliminarPersonalService.eliminarPersonaPorId(id);
    return res.status(HttpStatus.OK).json({
      message: 'datos recibidos',
      user: persona
    });
  }
}
