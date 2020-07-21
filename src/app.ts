import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import compression from 'compression';
import session from 'express-session';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { LoggerService } from './common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: true,
    transform: true, // transform object to DTO class
  }));

  if (process.env.NODE_ENV === 'production') {
    app.useLogger(app.get(LoggerService));
    app.set('trust proxy', 1);
  }

  //#region Express Middleware
  app.use(compression());
  app.use(session({
    secret: 'tEsTeD',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' },
  }));
  app.use(helmet());
  //#endregion

  await app.listen(process.env.PORT || 3000);
}

// eslint-disable-next-line no-console
bootstrap().catch(console.error);
