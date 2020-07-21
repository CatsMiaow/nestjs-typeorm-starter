import { IsOptional, IsString, ArrayNotEmpty } from 'class-validator';

import { Category } from '../entity';

export class SampleDto {
  @IsString()
  public title!: string;

  @IsOptional()
  @IsString()
  public content?: string;

  @IsOptional()
  @ArrayNotEmpty()
  public categories?: Category[];
}
