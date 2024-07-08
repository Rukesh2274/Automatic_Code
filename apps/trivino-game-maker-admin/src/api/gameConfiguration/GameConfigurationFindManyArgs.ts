import { GameConfigurationWhereInput } from "./GameConfigurationWhereInput";
import { GameConfigurationOrderByInput } from "./GameConfigurationOrderByInput";

export type GameConfigurationFindManyArgs = {
  where?: GameConfigurationWhereInput;
  orderBy?: Array<GameConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
