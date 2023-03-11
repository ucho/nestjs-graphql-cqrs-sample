import {
  ApolloGatewayDriver,
  type ApolloGatewayDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { readFileSync } from 'fs';
import { join } from 'path';

const supergraphSdl = readFileSync(
  join(process.cwd(), 'supergraph.gql'),
).toString();

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl,
      },
    }),
  ],
})
export class AppModule {}
