import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeorm.config';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { RoleModule } from 'src/modules/role/role.module';
import { CategoryModule } from 'src/modules/category/category.module';
import { CourseModule } from 'src/modules/course/course.module';
import { LessonModule } from 'src/modules/lesson/lesson.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UsersModule,
    RoleModule,
    CategoryModule,
    CourseModule,
    LessonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
