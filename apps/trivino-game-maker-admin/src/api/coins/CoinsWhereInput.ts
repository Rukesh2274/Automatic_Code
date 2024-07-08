import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CoinsWhereInput = {
  id?: StringFilter;
  amount?: IntNullableFilter;
  price?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
