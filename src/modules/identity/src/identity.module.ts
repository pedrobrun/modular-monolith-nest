import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';

@Module({
  imports: [],
  providers: [IdentityService],
})
export class IdentityModule {}
