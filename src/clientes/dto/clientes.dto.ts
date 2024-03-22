import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ClientesDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'El texto es requerido' })
  @IsString()
  readonly nombre: string;
}