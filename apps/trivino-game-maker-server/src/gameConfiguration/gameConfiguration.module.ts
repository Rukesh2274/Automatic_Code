import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameConfigurationModuleBase } from "./base/gameConfiguration.module.base";
import { GameConfigurationService } from "./gameConfiguration.service";
import { GameConfigurationController } from "./gameConfiguration.controller";
import { GameConfigurationResolver } from "./gameConfiguration.resolver";

@Module({
  imports: [GameConfigurationModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameConfigurationController],
  providers: [GameConfigurationService, GameConfigurationResolver],
  exports: [GameConfigurationService],
})
export class GameConfigurationModule {}
