import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { User } from "../users/entities/user-entity";
import { Post } from "./entities/post.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, User]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}