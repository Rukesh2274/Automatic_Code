import { JsonValue } from "type-fest";
import { Game } from "../game/Game";

export type GameConfiguration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  settings: JsonValue;
  game?: Game | null;
};
