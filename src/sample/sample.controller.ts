import { Body, Controller, Get, Param, Post, Put, Delete, NotFoundException, InternalServerErrorException } from '@nestjs/common';

import { SampleDto } from './sample.dto';
import { SampleService } from './sample.service';
import { Memo } from '../entity';

@Controller('sample')
export class SampleController {
  constructor(private sample: SampleService) {}

  @Get('memo/:id')
  public async read(@Param('id') id: number): Promise<Memo> {
    const result = await this.sample.read(id);
    if (!result) {
      throw new NotFoundException('NotFoundMemo');
    }

    return result;
  }

  @Post('memo')
  public async create(@Body() body: SampleDto): Promise<{ id: number }> {
    const result = await this.sample.create(body);
    if (!result.id) {
      throw new InternalServerErrorException('NotCreatedMemo');
    }

    return { id: result.id };
  }

  @Put('memo/:id')
  public async update(@Param('id') id: number, @Body() body: SampleDto): Promise<{ success: boolean }> {
    const result = await this.sample.update(id, body);

    return { success: !!result.affected };
  }

  @Delete('memo/:id')
  public async remove(@Param('id') id: number): Promise<{ success: boolean }> {
    const result = await this.sample.remove(id);

    return { success: !!result.affected };
  }
}
