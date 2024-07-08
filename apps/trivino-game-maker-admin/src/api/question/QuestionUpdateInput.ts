import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  text?: string | null;
  points?: number | null;
  game?: GameWhereUniqueInput | null;
  answers?: AnswerUpdateManyWithoutQuestionsInput;
};
