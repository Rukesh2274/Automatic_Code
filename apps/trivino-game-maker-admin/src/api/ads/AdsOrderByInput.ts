import { SortOrder } from "../../util/SortOrder";

export type AdsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  platform?: SortOrder;
  adId?: SortOrder;
  clicks?: SortOrder;
  impressions?: SortOrder;
  revenue?: SortOrder;
};
