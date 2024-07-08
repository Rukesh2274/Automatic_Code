import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
  isCorrect?: SortOrder;
  questionId?: SortOrder;
};
