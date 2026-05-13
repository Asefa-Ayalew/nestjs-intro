import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreatePostDto } from "./dto/create-post.dto";
import { User } from "../users/entities/user-entity";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createPostDto: CreatePostDto) {
    const user = await this.userRepository.findOne({
      where: { id: createPostDto.userId },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const post = this.postRepository.create({
      title: createPostDto.title,
      content: createPostDto.content,
      user,
    });

    return await this.postRepository.save(post);
  }

  async findAll() {
    return await this.postRepository.find({
      relations: {
        user: true,
      },
    });
  }
}