import { SortOrder } from "../../util/SortOrder";

export type CoinsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  price?: SortOrder;
  userId?: SortOrder;
};
