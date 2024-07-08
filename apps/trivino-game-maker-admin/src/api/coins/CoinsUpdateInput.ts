import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CoinsUpdateInput = {
  amount?: number | null;
  price?: number | null;
  user?: UserWhereUniqueInput | null;
};
