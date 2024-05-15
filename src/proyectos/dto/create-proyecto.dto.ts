import { IsString, MinLength } from "class-validator";

export class CreateProyectoDto {

    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    description?: string;
     
}
