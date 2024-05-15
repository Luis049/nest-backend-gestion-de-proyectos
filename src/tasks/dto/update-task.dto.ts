import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsUUID()
  @IsOptional()
  proyectoId: string;
}
