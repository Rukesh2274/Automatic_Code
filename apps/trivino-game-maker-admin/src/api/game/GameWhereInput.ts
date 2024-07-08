import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";
import { GameConfigurationListRelationFilter } from "../gameConfiguration/GameConfigurationListRelationFilter";

export type GameWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  questions?: QuestionListRelationFilter;
  gameConfigurations?: GameConfigurationListRelationFilter;
};
