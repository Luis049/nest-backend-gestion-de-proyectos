import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { ProyectosModule } from './proyectos/proyectos.module';

@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities:true,
      synchronize: true,
    }),
    ProyectosModule,
    TasksModule,
  ],  
  controllers: [],
  providers: [],
})
export class AppModule {}
