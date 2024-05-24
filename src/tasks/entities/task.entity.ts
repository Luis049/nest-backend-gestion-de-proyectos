import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import {
  Column,
  DeleteDateColumn,
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
  taskId?: string;

  @Column()
  name: string;

  @Column()
  proyectoId: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.nuevo })
  estado?: TaskStatus;

  @DeleteDateColumn()
  deleted: Date;

  @JoinColumn()
  @ManyToOne(() => Proyecto, (proyecto) => proyecto.tasks)
  proyecto: Proyecto;
}
