import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  text?: SortOrder;
  points?: SortOrder;
  gameId?: SortOrder;
};
