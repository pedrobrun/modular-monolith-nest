import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';

@Module({
  imports: [],
  providers: [CreditService],
})
export class CreditModule {}
