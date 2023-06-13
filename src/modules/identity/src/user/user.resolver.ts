import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './gql/user.type';
import { UserService } from './user.service';
import { UserReturn } from './gql/user-return.type';
import { CreateUserInput } from './gql/create-user-input.type';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserReturn, { nullable: true })
  async createUser(
    @Args('data') userInput: CreateUserInput,
  ): Promise<UserReturn> {
    return await this.userService.create(userInput);
  }

  @Query(() => [UserReturn])
  async getUsers(): Promise<UserReturn[]> {
    return await this.userService.getUsers();
  }
}
