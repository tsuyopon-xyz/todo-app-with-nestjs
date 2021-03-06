import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // localhost:3001で起動しているNext.jsアプリからのアクセスを受け付ける想定
    origin: 'http://localhost:3001',
  });
  const config = new DocumentBuilder()
    .setTitle('Todos API')
    .setDescription('Todo情報を操作するAPIを提供')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
