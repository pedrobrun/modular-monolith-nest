import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditModule } from './modules/credit/src/credit.module';
import { IdentityModule } from './modules/identity/src/identity.module';

@Module({
  imports: [CreditModule, IdentityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
