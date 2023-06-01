import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UsersModule } from './users/users.module';
import { DatagroupsModule } from './datagroups/datagroups.module';
import { ColumnsModule } from './columns/columns.module';
import { DataresponsesModule } from './dataresponses/dataresponses.module';

@Module({
  imports: [UsersModule, DatagroupsModule, ColumnsModule, DataresponsesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
