import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

import { Memo } from '../entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Memo)
    private memo: Repository<Memo>,
  ) {}

  public async create(data: Partial<Memo>): Promise<Memo> {
    return this.memo.save(data);
  }

  public async read(id: number): Promise<Optional<Memo>> {
    return this.memo.findOne(id);
  }

  public async update(id: number, data: Partial<Memo>): Promise<UpdateResult> {
    return this.memo.update(id, data);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.memo.delete(id);
  }
}
