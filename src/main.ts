/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from "@nestjs/core";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppModule } from "./app.module";
import * as cors from "cors";
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(session({ secret: "nest is awesome" }));

  const configService = app.get(ConfigService); // Retrieve ConfigService instance

  const port = configService.get<number>("PORT", 3000); // Access the 'PORT' environment variable

  app.enableCors({
    origin: "*",
    methods: "GET, PUT, POST, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  });

  app.use(cors());
  app.listen(port, "0.0.0.0", async () => {
    console.log(`Application is running on: ${await app.getUrl()}`);
  });
}

bootstrap();
