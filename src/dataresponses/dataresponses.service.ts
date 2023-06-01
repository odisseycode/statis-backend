import { Injectable } from '@nestjs/common';
import { CreateDataresponseDto } from './dto/create-dataresponse.dto';
import { UpdateDataresponseDto } from './dto/update-dataresponse.dto';

@Injectable()
export class DataresponsesService {
  create(createDataresponseDto: CreateDataresponseDto) {
    return 'This action adds a new dataresponse';
  }

  findAll() {
    return `This action returns all dataresponses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataresponse`;
  }

  update(id: number, updateDataresponseDto: UpdateDataresponseDto) {
    return `This action updates a #${id} dataresponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataresponse`;
  }
}
