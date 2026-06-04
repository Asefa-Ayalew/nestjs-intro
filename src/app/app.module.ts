import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { RoleModule } from 'src/role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UsersModule,
    RoleModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
