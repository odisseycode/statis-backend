import { Module } from '@nestjs/common';
import { DataresponsesService } from './dataresponses.service';
import { DataresponsesController } from './dataresponses.controller';

@Module({
  controllers: [DataresponsesController],
  providers: [DataresponsesService]
})
export class DataresponsesModule {}
