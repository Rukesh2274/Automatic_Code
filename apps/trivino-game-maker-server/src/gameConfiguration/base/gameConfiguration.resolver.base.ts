/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { GameConfiguration } from "./GameConfiguration";
import { GameConfigurationCountArgs } from "./GameConfigurationCountArgs";
import { GameConfigurationFindManyArgs } from "./GameConfigurationFindManyArgs";
import { GameConfigurationFindUniqueArgs } from "./GameConfigurationFindUniqueArgs";
import { CreateGameConfigurationArgs } from "./CreateGameConfigurationArgs";
import { UpdateGameConfigurationArgs } from "./UpdateGameConfigurationArgs";
import { DeleteGameConfigurationArgs } from "./DeleteGameConfigurationArgs";
import { Game } from "../../game/base/Game";
import { GameConfigurationService } from "../gameConfiguration.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GameConfiguration)
export class GameConfigurationResolverBase {
  constructor(
    protected readonly service: GameConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "read",
    possession: "any",
  })
  async _gameConfigurationsMeta(
    @graphql.Args() args: GameConfigurationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GameConfiguration])
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "read",
    possession: "any",
  })
  async gameConfigurations(
    @graphql.Args() args: GameConfigurationFindManyArgs
  ): Promise<GameConfiguration[]> {
    return this.service.gameConfigurations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GameConfiguration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "read",
    possession: "own",
  })
  async gameConfiguration(
    @graphql.Args() args: GameConfigurationFindUniqueArgs
  ): Promise<GameConfiguration | null> {
    const result = await this.service.gameConfiguration(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameConfiguration)
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "create",
    possession: "any",
  })
  async createGameConfiguration(
    @graphql.Args() args: CreateGameConfigurationArgs
  ): Promise<GameConfiguration> {
    return await this.service.createGameConfiguration({
      ...args,
      data: {
        ...args.data,

        game: args.data.game
          ? {
              connect: args.data.game,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => GameConfiguration)
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "update",
    possession: "any",
  })
  async updateGameConfiguration(
    @graphql.Args() args: UpdateGameConfigurationArgs
  ): Promise<GameConfiguration | null> {
    try {
      return await this.service.updateGameConfiguration({
        ...args,
        data: {
          ...args.data,

          game: args.data.game
            ? {
                connect: args.data.game,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GameConfiguration)
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "delete",
    possession: "any",
  })
  async deleteGameConfiguration(
    @graphql.Args() args: DeleteGameConfigurationArgs
  ): Promise<GameConfiguration | null> {
    try {
      return await this.service.deleteGameConfiguration(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Game, {
    nullable: true,
    name: "game",
  })
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "read",
    possession: "any",
  })
  async getGame(
    @graphql.Parent() parent: GameConfiguration
  ): Promise<Game | null> {
    const result = await this.service.getGame(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
