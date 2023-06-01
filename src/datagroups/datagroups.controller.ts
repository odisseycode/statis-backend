import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatagroupsService } from './datagroups.service';
import { CreateDatagroupDto } from './dto/create-datagroup.dto';
import { UpdateDatagroupDto } from './dto/update-datagroup.dto';

@Controller('datagroups')
export class DatagroupsController {
  constructor(private readonly datagroupsService: DatagroupsService) {}

  @Post()
  create(@Body() createDatagroupDto: CreateDatagroupDto) {
    return this.datagroupsService.create(createDatagroupDto);
  }

  @Get()
  findAll() {
    return this.datagroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datagroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatagroupDto: UpdateDatagroupDto) {
    return this.datagroupsService.update(+id, updateDatagroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datagroupsService.remove(+id);
  }
}
