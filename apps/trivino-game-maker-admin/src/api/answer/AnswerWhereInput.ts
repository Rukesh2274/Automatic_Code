import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  isCorrect?: BooleanNullableFilter;
  question?: QuestionWhereUniqueInput;
};
