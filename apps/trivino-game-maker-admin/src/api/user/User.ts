import { JsonValue } from "type-fest";
import { Game } from "../game/Game";
import { Coins } from "../coins/Coins";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  games?: Array<Game>;
  coinsItems?: Array<Coins>;
};
