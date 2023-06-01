import { Injectable } from '@nestjs/common';
import { CreateDatagroupDto } from './dto/create-datagroup.dto';
import { UpdateDatagroupDto } from './dto/update-datagroup.dto';

@Injectable()
export class DatagroupsService {
  create(createDatagroupDto: CreateDatagroupDto) {
    return 'This action adds a new datagroup';
  }

  findAll() {
    return `This action returns all datagroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datagroup`;
  }

  update(id: number, updateDatagroupDto: UpdateDatagroupDto) {
    return `This action updates a #${id} datagroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} datagroup`;
  }
}
