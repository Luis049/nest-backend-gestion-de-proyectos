import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum TaskStatus {
  nuevo = 'nuevo',
  terminado = 'terminado',
}

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  taskId: string;

  @Column()
  name: string;

  @Column({ length: 500 })
  description?: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.nuevo })
  estado: TaskStatus;

  @JoinColumn()
  @ManyToOne(() => Proyecto, (proyecto) => proyecto.tasks)
  proyecto: Proyecto;
}
