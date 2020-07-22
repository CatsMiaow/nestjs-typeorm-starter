# nestjs-starter

Node.js Nest framework starter

## Configuration

Edit the file in the [config](src/config) folder.
> `default`, `production`, `development`, `test`

## Installation

```sh
npm ci
```

## Development

```sh
npm run start:dev
```

Run [http://localhost:3000](http://localhost:3000)

## Test

```sh
npm test # exclude e2e
npm run test:e2e
```

## Production

```sh
# define NODE_ENV and PORT
npm run build
# NODE_ENV=production PORT=8000 node dist/app
node dist/app
# OR
npm start
```

## Implements

- See [app](src/app.ts), [app.module](src/app.module.ts)
- [Exceptions Filter](src/common/exceptions.filter.ts)
- [Logging Middleware](src/common/logger.middleware.ts)
- [Logger for Production](src/common/logger.service.ts)
- [CRUD API Sample](src/sample)
- [Unit Test](src/sample/sample.controller.spec.ts)
- [E2E Test](test/e2e/sample.spec.ts)

### Links

- [NestJS Project Structure](https://github.com/CatsMiaow/node-nestjs-structure)
- [Nest Sample](https://github.com/nestjs/nest/tree/master/sample)
- [Awesome Nest](https://github.com/juliandavidmr/awesome-nestjs)
- [NestJS](https://docs.nestjs.com)
- [TypeORM](https://typeorm.io)
