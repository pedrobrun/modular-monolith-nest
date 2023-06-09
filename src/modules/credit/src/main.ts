import { NestFactory } from '@nestjs/core';
import { CreditModule } from './credit.module';

async function bootstrap() {
  const app = await NestFactory.create(CreditModule);
  await app.listen(3002);
}
bootstrap();
