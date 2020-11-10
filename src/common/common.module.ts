import { Global, Module } from '@nestjs/common';

import { Logger } from '.';

@Global()
@Module({
  providers: [Logger],
  exports: [Logger],
})
export class CommonModule {}
