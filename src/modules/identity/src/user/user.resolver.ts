import { Query, Resolver } from '@nestjs/graphql';
import { User } from './gql/user.type';
import { UserService } from './user.service';
import { UserReturn } from './gql/user-return.type';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserReturn)
  getUser(): UserReturn {
    return this.userService.getUser();
  }
}
