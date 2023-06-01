import { PartialType } from '@nestjs/mapped-types';
import { CreateDatagroupDto } from './create-datagroup.dto';

export class UpdateDatagroupDto extends PartialType(CreateDatagroupDto) {}
