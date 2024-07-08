import { Game } from "../game/Game";
import { Answer } from "../answer/Answer";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  points: number | null;
  game?: Game | null;
  answers?: Array<Answer>;
};
