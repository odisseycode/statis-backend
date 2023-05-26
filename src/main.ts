import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {meanFunction, medianFunction, standardDeviationFunction, varianceFunction, minFunction, maxFunction} from 'src/functions/descreptive-stats.module'
import {pdfFunction, cdfFunction, invFunction, sampleFunction} from 'src/functions/probability-stats.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
