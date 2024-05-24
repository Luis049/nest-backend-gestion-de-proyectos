import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('proyectos')
export class Proyecto {
  @PrimaryGeneratedColumn('uuid')
  proyectoId: string;

  @Column()
  name: string;

  @Column({ length: 500 })
  description?: string;

  @DeleteDateColumn()
  deleted: Date;

  
  @OneToMany(() => Task, (task) => task.proyecto)
  tasks: Task[];

 
}
