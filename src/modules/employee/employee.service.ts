import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);

    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({
      where: { id },
    });

    if (!employee) {
      throw new Error(`Employee with id ${id} not found`);
    }
    return employee;
  }
  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const employee = await this.employeeRepository.findOne({
      where: { id },
    });

    if (!employee) {
      throw new Error(`Employee with id ${id} not found`);
    }

    Object.assign(employee, updateEmployeeDto);

    return await this.employeeRepository.save(employee);
  }

  async remove(id: string) {
    const employee = await this.employeeRepository.findOne({  
      where: { id },
    });

    if (!employee) {
      throw new Error(`Employee with id ${id} not found`);
    }

    return await this.employeeRepository.remove(employee);
  }
}
