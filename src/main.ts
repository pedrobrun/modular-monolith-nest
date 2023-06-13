import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`Running on ${PORT}`);
  Logger.log(`Apollo's playground: http://localhost:${PORT}/graphql`);
}
bootstrap();
