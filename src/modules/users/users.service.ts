import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user-entity";
import { CreateUserDto } from "./dto/create-user-dto";


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find({
      relations: {
        posts: true,
        profile: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({
      where: { id },
      relations: {
        posts: true,
        profile: true,
      },
    });
  }

  async remove(id: string) {
    return await this.userRepository.delete(id);
  }
}