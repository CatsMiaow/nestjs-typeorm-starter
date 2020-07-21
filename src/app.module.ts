import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configuration } from './config';
import { ExceptionsFilter, LoggerMiddleware } from './common';
import { SampleModule } from './sample';

@Module({
  imports: [
    // Configuration
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    // Database
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        entities: [`${__dirname}/entity/**/*.{js,ts}`],
        subscribers: [`${__dirname}/subscriber/**/*.{js,ts}`],
        migrations: [`${__dirname}/migration/**/*.{js,ts}`],
        ...config.get('db'),
      }),
      inject: [ConfigService],
    }),
    // Static
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../public`,
      renderPath: '/',
    }),
    // API
    SampleModule,
  ],
  providers: [{
    provide: APP_FILTER,
    useClass: ExceptionsFilter,
  }],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
