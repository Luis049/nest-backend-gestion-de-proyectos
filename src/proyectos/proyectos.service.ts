import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { Repository } from 'typeorm';
import { Estado } from 'src/estados/entities/estado.entity';

@Injectable()
export class ProyectosService {

  constructor(

    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,

    @InjectRepository(Estado)
    private readonly estadoRepository: Repository<Estado>
  )
  {}

async create(createProyectoDto: CreateProyectoDto) {

  const estado = await this.estadoRepository.findOneBy({name: createProyectoDto.estado})

  if(!estado){
    throw new BadRequestException('State not found')
  }

    // const proyecto = this.proyectoRepository.create(createProyectoDto)
    return await this.proyectoRepository.save({
      ...createProyectoDto,
      estado,
    });
    return
  }

  async findAll() {
    return await this.proyectoRepository.find();
  }

  async findOne(id: number) {
    return await this.proyectoRepository.findOneBy({id});
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto) {
    // return this.proyectoRepository.update(id, updateProyectoDto)
    return
  }

  async remove(id: number) {
    return this.proyectoRepository.softDelete({id})
  }
}
