import { Proyecto } from "src/proyectos/entities/proyecto.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Estado {

    @Column({primary:true, generated:true})
    id: number;

    @Column({ length: 500})
    name: string;

    @OneToMany(() => Proyecto, (proyecto) => proyecto.estado)
    proyecto: Proyecto[];
}
