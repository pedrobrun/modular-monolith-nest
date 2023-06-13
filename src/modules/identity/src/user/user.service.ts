import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserReturn } from './gql/user-return.type';
import { CreateUserInput } from './gql/create-user-input.type';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userInput: CreateUserInput): Promise<UserReturn> {
    try {
      return await this.userRepository.create(userInput);
    } catch (e) {
      if (e.code === 'P2002') {
        throw new HttpException(
          'Email already in use.',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async getUsers(): Promise<UserReturn[]> {
    return await this.userRepository.getUsers();
  }
}
