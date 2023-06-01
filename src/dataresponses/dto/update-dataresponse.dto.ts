import { PartialType } from '@nestjs/mapped-types';
import { CreateDataresponseDto } from './create-dataresponse.dto';

export class UpdateDataresponseDto extends PartialType(CreateDataresponseDto) {}
