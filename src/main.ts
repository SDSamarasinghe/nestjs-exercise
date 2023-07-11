import { NestFactory } from '@nestjs/core';
//import { CorsMiddleware } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(3004);
  // app.enableCors({
  //   origin: 'http://localhost:3000', // Replace with your allowed frontend origin
  //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  // });




  
}
bootstrap();
