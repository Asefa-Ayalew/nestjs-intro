import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(createCategoryDto);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        (error as any).code === '23505'
      ) {
        throw new BadRequestException('Category slug already exists');
      }
    }
  }

  async findAll() {
    return await this.categoryRepository.find();
  }

  async findOne(id: string) {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepository.update(id, updateCategoryDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    await this.categoryRepository.delete(id);
  }
}
