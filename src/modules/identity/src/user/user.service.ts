import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserReturn } from './gql/user-return.type';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getUser(): UserReturn {
    return this.userRepository.getUser();
  }
}
