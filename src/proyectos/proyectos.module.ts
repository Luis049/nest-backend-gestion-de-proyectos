import { Module } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { ProyectosController } from './proyectos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { Estado } from 'src/estados/entities/estado.entity';
import { EstadosModule } from 'src/estados/estados.module';
import { EstadosService } from 'src/estados/estados.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto]), EstadosModule],
  controllers: [ProyectosController],
  providers: [ProyectosService, EstadosService],
})
export class ProyectosModule {}
