import { IsString } from "class-validator";

export class CreateEstadoDto {
    @IsString()
    name: string;

}
