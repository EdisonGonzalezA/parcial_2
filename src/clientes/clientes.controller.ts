import {Body, Controller, Delete, Get, Param, Post, Put,} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { ClientesDTO } from './dto/clientes.dto';

  @ApiTags('clientes')
  @Controller('api/v1/clientes')
  export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}
  
    @Post()
    insertar(@Body() clientesDTO: ClientesDTO) {
      return this.clientesService.insertar(clientesDTO);
    }
    @Get()
    todos() {
      return this.clientesService.todos();
    }
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.clientesService.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() clientesDTO: ClientesDTO) {
      return this.clientesService.actualizar(id, clientesDTO);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.clientesService.eliminar(id);
    }
  }