import { Injectable } from '@nestjs/common';

@Injectable()
export class CreditService {
  getHello(): string {
    return 'Hello World!';
  }
}
