import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Profile } from "./entities/profile.entity";
import { User } from "../users/entities/user-entity";
import { CreateProfileDto } from "./dto/create-profile.dto";

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const user = await this.userRepository.findOne({
      where: { id: createProfileDto.userId },
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    const profile = this.profileRepository.create({
      bio: createProfileDto.bio,
      gender: createProfileDto.gender,
      user,
    });

    return await this.profileRepository.save(profile);
  }
}