import { Module } from '@nestjs/common';
import { IdentityService } from './identity.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  providers: [IdentityService],
})
export class IdentityModule {}
