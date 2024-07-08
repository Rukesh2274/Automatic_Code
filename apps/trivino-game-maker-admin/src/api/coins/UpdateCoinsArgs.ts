import { CoinsWhereUniqueInput } from "./CoinsWhereUniqueInput";
import { CoinsUpdateInput } from "./CoinsUpdateInput";

export type UpdateCoinsArgs = {
  where: CoinsWhereUniqueInput;
  data: CoinsUpdateInput;
};
