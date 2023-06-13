import { Injectable } from '@nestjs/common';
import { UserReturn } from './gql/user-return.type';
import { CreateUserInput } from './gql/create-user-input.type';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userInput: CreateUserInput): Promise<UserReturn> {
    return await this.prismaService.user.create({
      data: userInput,
      select: { email: true, id: true },
    });
  }

  async getUsers(): Promise<UserReturn[]> {
    return await this.prismaService.user.findMany({
      select: { email: true, id: true },
    });
  }
}
