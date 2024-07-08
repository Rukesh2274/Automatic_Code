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
import { GameService } from "../game.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GameCreateInput } from "./GameCreateInput";
import { Game } from "./Game";
import { GameFindManyArgs } from "./GameFindManyArgs";
import { GameWhereUniqueInput } from "./GameWhereUniqueInput";
import { GameUpdateInput } from "./GameUpdateInput";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { GameConfigurationFindManyArgs } from "../../gameConfiguration/base/GameConfigurationFindManyArgs";
import { GameConfiguration } from "../../gameConfiguration/base/GameConfiguration";
import { GameConfigurationWhereUniqueInput } from "../../gameConfiguration/base/GameConfigurationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GameControllerBase {
  constructor(
    protected readonly service: GameService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Game })
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameCreateInput,
  })
  async createGame(@common.Body() data: GameCreateInput): Promise<Game> {
    return await this.service.createGame({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Game] })
  @ApiNestedQuery(GameFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async games(@common.Req() request: Request): Promise<Game[]> {
    const args = plainToClass(GameFindManyArgs, request.query);
    return this.service.games({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async game(
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Game | null> {
    const result = await this.service.game({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,

        user: {
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
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GameUpdateInput,
  })
  async updateGame(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() data: GameUpdateInput
  ): Promise<Game | null> {
    try {
      return await this.service.updateGame({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,

          user: {
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
  @swagger.ApiOkResponse({ type: Game })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGame(
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Game | null> {
    try {
      return await this.service.deleteGame({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,

          user: {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questions")
  @ApiNestedQuery(QuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async findQuestions(
    @common.Req() request: Request,
    @common.Param() params: GameWhereUniqueInput
  ): Promise<Question[]> {
    const query = plainToClass(QuestionFindManyArgs, request.query);
    const results = await this.service.findQuestions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        text: true,
        points: true,

        game: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questions")
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  async connectQuestions(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        connect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questions")
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  async updateQuestions(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        set: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questions")
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  async disconnectQuestions(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        disconnect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/gameConfigurations")
  @ApiNestedQuery(GameConfigurationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GameConfiguration",
    action: "read",
    possession: "any",
  })
  async findGameConfigurations(
    @common.Req() request: Request,
    @common.Param() params: GameWhereUniqueInput
  ): Promise<GameConfiguration[]> {
    const query = plainToClass(GameConfigurationFindManyArgs, request.query);
    const results = await this.service.findGameConfigurations(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/gameConfigurations")
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  async connectGameConfigurations(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: GameConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameConfigurations: {
        connect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/gameConfigurations")
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  async updateGameConfigurations(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: GameConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameConfigurations: {
        set: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/gameConfigurations")
  @nestAccessControl.UseRoles({
    resource: "Game",
    action: "update",
    possession: "any",
  })
  async disconnectGameConfigurations(
    @common.Param() params: GameWhereUniqueInput,
    @common.Body() body: GameConfigurationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameConfigurations: {
        disconnect: body,
      },
    };
    await this.service.updateGame({
      where: params,
      data,
      select: { id: true },
    });
  }
}
