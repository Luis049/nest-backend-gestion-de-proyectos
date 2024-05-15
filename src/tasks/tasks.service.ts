import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(Proyecto)
    private readonly proyectosRepository: Repository<Proyecto>,
  ) {}
  async create(createTaskDto: CreateTaskDto) {
    const proyecto = await this.proyectosRepository.findOneBy({
      proyectoId: createTaskDto.proyectoId,
    });
    if (!proyecto) {
      throw new NotFoundException(`Proyecto con id no existe`);
    }

    const task = this.taskRepository.create({
      ...createTaskDto,
      proyecto, // Asociamos el proyecto a la tarea
    });

    return await this.taskRepository.save(task);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async findOne(id: string) {
    return await this.taskRepository.findOneBy({ taskId: id });
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.taskRepository.update(id, updateTaskDto);
  }

  async remove(id: string) {
    return await this.taskRepository.delete({ taskId: id });
  }
  async switchear(id: string ): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ taskId: id });
    if (!task) {
      throw new NotFoundException(`Tarea con id ${id} no encontrada.`);
    }

    const taskEstado = task.estado === 'nuevo' ? 'terminado' : 'nuevo';
     
     await this.taskRepository.update(id, { estado: task.estado });

     return task;
  }
}
