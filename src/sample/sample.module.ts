import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';
import { Memo, Category } from '../entity';

@Module({
  imports: [TypeOrmModule.forFeature([Memo, Category])],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
