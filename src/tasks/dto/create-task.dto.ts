import { IsString, IsUUID, MinLength } from 'class-validator';

export class CreateTaskDto {
    
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  proyectoId: string;
}
