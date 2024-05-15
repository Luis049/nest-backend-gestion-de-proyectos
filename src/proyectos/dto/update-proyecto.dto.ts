import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateProyectoDto {

    @IsString()
    @IsOptional()
    @MinLength(3)
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

}
