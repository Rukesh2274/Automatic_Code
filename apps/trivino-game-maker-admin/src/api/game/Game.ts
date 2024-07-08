import { User } from "../user/User";
import { Question } from "../question/Question";
import { GameConfiguration } from "../gameConfiguration/GameConfiguration";

export type Game = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  user?: User | null;
  questions?: Array<Question>;
  gameConfigurations?: Array<GameConfiguration>;
};
