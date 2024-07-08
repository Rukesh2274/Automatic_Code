import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameConfigurationServiceBase } from "./base/gameConfiguration.service.base";

@Injectable()
export class GameConfigurationService extends GameConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
