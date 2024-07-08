import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CoinsService } from "./coins.service";
import { CoinsControllerBase } from "./base/coins.controller.base";

@swagger.ApiTags("coins")
@common.Controller("coins")
export class CoinsController extends CoinsControllerBase {
  constructor(
    protected readonly service: CoinsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
