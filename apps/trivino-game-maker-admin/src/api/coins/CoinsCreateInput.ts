import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CoinsCreateInput = {
  amount?: number | null;
  price?: number | null;
  user?: UserWhereUniqueInput | null;
};
