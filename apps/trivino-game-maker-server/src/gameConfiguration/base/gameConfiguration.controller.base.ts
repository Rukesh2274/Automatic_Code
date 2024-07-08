/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GameConfigurationService } from "../gameConfiguration.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameConfigurationCreateInput } from "./GameConfigurationCreateInput";
import { GameConfiguration } from "./GameConfiguration";
import { GameConfigurationFindManyArgs } from "./GameConfigurationFindManyArgs";
import { GameConfigurationWhereUniqueInput } from "./GameConfigurationWhereUniqueInput";
import { GameConfigurationUpdateInput } from "./GameConfigurationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameConfigurationControllerBase {
  constructor(
    protected readonly service: GameConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameConfiguration })
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameConfigurationCreateInput,
  })
  async createGameConfiguration(
    @common.Body() data: GameConfigurationCreateInput
  ): Promise<GameConfiguration> {
    return await this.service.createGameConfiguration({
      data: {
        ...data,

        game: data.game
          ? {
              connect: data.game,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        settings: true,

        game: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GameConfiguration] })
  @ApiNestedQuery(GameConfigurationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameConfigurations(
    @common.Req() request: Request
  ): Promise<GameConfiguration[]> {
    const args = plainToClass(GameConfigurationFindManyArgs, request.query);
    return this.service.gameConfigurations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        settings: true,

        game: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async gameConfiguration(
    @common.Param() params: GameConfigurationWhereUniqueInput
  ): Promise<GameConfiguration | null> {
    const result = await this.service.gameConfiguration({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        settings: true,

        game: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GameConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameConfigurationUpdateInput,
  })
  async updateGameConfiguration(
    @common.Param() params: GameConfigurationWhereUniqueInput,
    @common.Body() data: GameConfigurationUpdateInput
  ): Promise<GameConfiguration | null> {
    try {
      return await this.service.updateGameConfiguration({
        where: params,
        data: {
          ...data,

          game: data.game
            ? {
                connect: data.game,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          settings: true,

          game: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GameConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGameConfiguration(
    @common.Param() params: GameConfigurationWhereUniqueInput
  ): Promise<GameConfiguration | null> {
    try {
      return await this.service.deleteGameConfiguration({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          settings: true,

          game: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}