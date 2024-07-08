import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CoinsModuleBase } from "./base/coins.module.base";
import { CoinsService } from "./coins.service";
import { CoinsController } from "./coins.controller";
import { CoinsResolver } from "./coins.resolver";

@Module({
  imports: [CoinsModuleBase, forwardRef(() => AuthModule)],
  controllers: [CoinsController],
  providers: [CoinsService, CoinsResolver],
  exports: [CoinsService],
})
export class CoinsModule {}
