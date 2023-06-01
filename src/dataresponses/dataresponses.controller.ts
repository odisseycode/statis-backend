import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataresponsesService } from './dataresponses.service';
import { CreateDataresponseDto } from './dto/create-dataresponse.dto';
import { UpdateDataresponseDto } from './dto/update-dataresponse.dto';

@Controller('dataresponses')
export class DataresponsesController {
  constructor(private readonly dataresponsesService: DataresponsesService) {}

  @Post()
  create(@Body() createDataresponseDto: CreateDataresponseDto) {
    return this.dataresponsesService.create(createDataresponseDto);
  }

  @Get()
  findAll() {
    return this.dataresponsesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataresponsesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataresponseDto: UpdateDataresponseDto) {
    return this.dataresponsesService.update(+id, updateDataresponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataresponsesService.remove(+id);
  }
}
