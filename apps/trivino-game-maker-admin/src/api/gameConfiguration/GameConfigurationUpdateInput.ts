import { InputJsonValue } from "../../types";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type GameConfigurationUpdateInput = {
  settings?: InputJsonValue;
  game?: GameWhereUniqueInput | null;
};
