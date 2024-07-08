import { GameConfiguration as TGameConfiguration } from "../api/gameConfiguration/GameConfiguration";

export const GAMECONFIGURATION_TITLE_FIELD = "id";

export const GameConfigurationTitle = (record: TGameConfiguration): string => {
  return record.id?.toString() || String(record.id);
};
