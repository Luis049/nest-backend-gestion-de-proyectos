import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Proyecto])], 
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
