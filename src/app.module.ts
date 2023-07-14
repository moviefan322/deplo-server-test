/* eslint-disable @typescript-eslint/no-var-requires */
import { Module, ValidationPipe, MiddlewareConsumer } from "@nestjs/common";
import { APP_PIPE } from "@nestjs/core";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { LessonsModule } from "./lessons/lessons.module";
import { StatsModule } from "./stats/stats.module";
import * as session from "express-session";
import { FlashcardsModule } from "./flashcards/flashcards.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface";
import { DBOptions } from "../db.datasourceoptions";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        const dbOptions: TypeOrmModuleOptions = {
          // retryAttempts: 10,
          // retryDelay: 3000,
          // autoLoadEntities: false
        };

        Object.assign(dbOptions, DBOptions);

        return dbOptions;
      },
    }),
    UsersModule,
    LessonsModule,
    StatsModule,
    FlashcardsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: "supersecret",
          resave: false,
          saveUninitialized: false,
        })
      )
      .forRoutes("*");
  }
}
