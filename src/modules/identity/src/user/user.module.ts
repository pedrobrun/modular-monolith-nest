import { HttpException, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            (error.extensions?.exception as HttpException)?.message ||
            error.message,
        };
        return graphQLFormattedError;
      },
    }),
  ],
  providers: [UserService, UserResolver, UserRepository, PrismaService],
})
export class UserModule {}
