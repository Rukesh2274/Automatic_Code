import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameListRelationFilter } from "../game/GameListRelationFilter";
import { CoinsListRelationFilter } from "../coins/CoinsListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  games?: GameListRelationFilter;
  coinsItems?: CoinsListRelationFilter;
};
