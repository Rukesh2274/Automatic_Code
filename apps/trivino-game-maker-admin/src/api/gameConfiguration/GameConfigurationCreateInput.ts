import { InputJsonValue } from "../../types";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type GameConfigurationCreateInput = {
  settings?: InputJsonValue;
  game?: GameWhereUniqueInput | null;
};
