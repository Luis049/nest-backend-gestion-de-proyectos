import { Injectable } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estado } from './entities/estado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadosService {


  constructor(

    @InjectRepository(Estado)
    private readonly estadoRepository: Repository<Estado>

  ){}


  async create(createEstadoDto: CreateEstadoDto) {
    return await this.estadoRepository.save(createEstadoDto)
  }

  async findAll() {
    return await this.estadoRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} estado`;
  }

  update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return `This action updates a #${id} estado`;
  }

  async remove(id: number) {
    return `This action removes a #${id} estado`;
  }
}
