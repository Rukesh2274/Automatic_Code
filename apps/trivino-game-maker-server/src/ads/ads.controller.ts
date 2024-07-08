import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdsService } from "./ads.service";
import { AdsControllerBase } from "./base/ads.controller.base";

@swagger.ApiTags("ads")
@common.Controller("ads")
export class AdsController extends AdsControllerBase {
  constructor(
    protected readonly service: AdsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
