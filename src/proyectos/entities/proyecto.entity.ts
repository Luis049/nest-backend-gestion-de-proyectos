import { Estado } from 'src/estados/entities/estado.entity';
import { Column, DeleteDateColumn, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Proyecto {

  @Column({primary:true, generated: true})
  id: number;

  @Column()
  name: string;

  @Column({ length: 500})
  description?: string;


  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Estado, (estado) => estado.id, {
    eager: true //para que traiga el estado al traer el finOne
  })
    estado: Estado;
}
