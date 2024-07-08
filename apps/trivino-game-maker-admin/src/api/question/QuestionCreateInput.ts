import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  text?: string | null;
  points?: number | null;
  game?: GameWhereUniqueInput | null;
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
};
