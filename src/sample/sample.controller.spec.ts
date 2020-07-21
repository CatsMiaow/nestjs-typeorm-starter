import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

import { SampleModule } from './sample.module';
import { SampleController } from './sample.controller';
import { Memo } from '../entity';
import { configuration } from '../config';

let app: TestingModule;
let sample: SampleController;
let idx: number;

beforeAll(async () => {
  app = await Test.createTestingModule({
    imports: [
      SampleModule,
      TypeOrmModule.forRoot({
        ...(<ConnectionOptions>(await configuration()).db),
        entities: [`${__dirname}/../entity/**/*.{js,ts}`],
      }),
    ],
  }).compile();
  sample = app.get(SampleController);
});

it('create memo"', async () => {
  const result = await sample.create({ title: 'FooBar', content: 'Hello World' });
  expect(result).toHaveProperty('id');
  idx = result.id;
});

it('read memo"', async () => {
  expect(await sample.read(idx)).toBeInstanceOf(Memo);
});

it('update memo"', async () => {
  expect(await sample.update(idx, { title: 'Blahblahblah' })).toHaveProperty('success', true);
});

it('delete memo"', async () => {
  expect(await sample.remove(idx)).toHaveProperty('success', true);
});

afterAll(async () => {
  await app.close();
});
