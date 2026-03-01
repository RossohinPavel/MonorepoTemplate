import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';
import { INestiaConfig, NestiaSwaggerComposer } from '@nestia/sdk';
import { OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Fastify core
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  // Logging
  const logger = new Logger("HTTP");
  const fastifyInstance = app.getHttpAdapter().getInstance();
  fastifyInstance.addHook("onResponse", (req, res, done) => {
    logger.log(`${req.ip} "${req.method} ${req.url}" ${res.statusCode}`);
    done();
  });

  // Swagger
  const config: Omit<INestiaConfig.ISwaggerConfig, "output"> = {
    info: {
      title: "Backend",
    },
    servers: [{url: "http://localhost:3000", description: "Localhost"}]
  }
  const document = await NestiaSwaggerComposer.document(app, config);
  SwaggerModule.setup("docs", app, document as OpenAPIObject);

  await app.listen(3000, '0.0.0.0');
}
void bootstrap();
