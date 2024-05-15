import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
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

  
  @OneToMany(() => Task, (task) => task.proyecto)
  tasks: Task[];

 
}
