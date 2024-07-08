import { SortOrder } from "../../util/SortOrder";

export type GameConfigurationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  settings?: SortOrder;
  gameId?: SortOrder;
};
