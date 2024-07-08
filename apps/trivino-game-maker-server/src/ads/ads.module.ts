import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdsModuleBase } from "./base/ads.module.base";
import { AdsService } from "./ads.service";
import { AdsController } from "./ads.controller";
import { AdsResolver } from "./ads.resolver";

@Module({
  imports: [AdsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdsController],
  providers: [AdsService, AdsResolver],
  exports: [AdsService],
})
export class AdsModule {}
