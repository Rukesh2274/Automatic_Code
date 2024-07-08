import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type AnswerCreateInput = {
  text?: string | null;
  isCorrect?: boolean | null;
  question?: QuestionWhereUniqueInput | null;
};
