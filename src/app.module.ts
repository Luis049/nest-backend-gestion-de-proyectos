import { Module } from '@nestjs/common';
import { ProyectosModule } from './proyectos/proyectos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadosModule } from './estados/estados.module';

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
    EstadosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
