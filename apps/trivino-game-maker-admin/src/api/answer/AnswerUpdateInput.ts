import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerUpdateInput = {
  text?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
