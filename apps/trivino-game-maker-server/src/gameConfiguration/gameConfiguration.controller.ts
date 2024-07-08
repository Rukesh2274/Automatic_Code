import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GameConfigurationService } from "./gameConfiguration.service";
import { GameConfigurationControllerBase } from "./base/gameConfiguration.controller.base";

@swagger.ApiTags("gameConfigurations")
@common.Controller("gameConfigurations")
export class GameConfigurationController extends GameConfigurationControllerBase {
  constructor(
    protected readonly service: GameConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
