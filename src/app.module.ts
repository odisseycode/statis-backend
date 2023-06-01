import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { UsersModule } from './users/users.module';
import { DatagroupsModule } from './datagroups/datagroups.module';
import { ColumnsModule } from './columns/columns.module';

@Module({
  imports: [UsersModule, DatagroupsModule, ColumnsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
