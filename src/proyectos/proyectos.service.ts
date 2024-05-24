import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { Proyecto } from './entities/proyecto.entity';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectosRepository: Repository<Proyecto>,
  ) {}

  async create(createProyectoDto: CreateProyectoDto) {
    // const proyecto = this.proyectosRepository.create(createProyectoDto);
    return await this.proyectosRepository.save(createProyectoDto);
  }

  async findAll() {
    const proyectos = await this.proyectosRepository.find({
      relations: ['tasks'],
    });

    return proyectos.map((proyecto) => {
      const numTerminados = proyecto.tasks.filter(
        (task) => task.estado === 'terminado',
      ).length;
      const total = proyecto.tasks.length;

      return {
        ...proyecto,
        porcentaje: total === 0 ? 0 : (numTerminados / total) * 100,
      };
    });
  }

  async findOne(id: string) {
    return await this.proyectosRepository.findOneBy({ proyectoId: id });
  }

  async update(id: string, updateProyectoDto: UpdateProyectoDto) {
    return await this.proyectosRepository.update(id, updateProyectoDto);
  }

  async remove(id: string) {
    return await this.proyectosRepository.softDelete({ proyectoId: id });
  }
}
