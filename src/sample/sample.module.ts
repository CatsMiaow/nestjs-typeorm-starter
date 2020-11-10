import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Memo, Category } from '../entity';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([Memo, Category])],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
