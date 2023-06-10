import { Injectable } from '@nestjs/common';
import { UserReturn } from './gql/user-return.type';

@Injectable()
export class UserRepository {
  getUser(): UserReturn {
    return { email: 'johndoe@email.com', id: '1' };
  }
}
