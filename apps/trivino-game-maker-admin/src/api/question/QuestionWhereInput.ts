import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  points?: IntNullableFilter;
  game?: GameWhereUniqueInput;
  answers?: AnswerListRelationFilter;
};
