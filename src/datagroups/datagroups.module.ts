import { Module } from '@nestjs/common';
import { DatagroupsService } from './datagroups.service';
import { DatagroupsController } from './datagroups.controller';

@Module({
  controllers: [DatagroupsController],
  providers: [DatagroupsService]
})
export class DatagroupsModule {}
