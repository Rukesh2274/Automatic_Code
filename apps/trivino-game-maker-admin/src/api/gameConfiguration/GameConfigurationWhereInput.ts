import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type GameConfigurationWhereInput = {
  id?: StringFilter;
  settings?: JsonFilter;
  game?: GameWhereUniqueInput;
};
