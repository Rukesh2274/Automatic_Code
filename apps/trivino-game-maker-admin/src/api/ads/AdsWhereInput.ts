import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AdsWhereInput = {
  id?: StringFilter;
  platform?: "Option1";
  adId?: StringNullableFilter;
  clicks?: IntNullableFilter;
  impressions?: IntNullableFilter;
  revenue?: FloatNullableFilter;
};
