import { CoinsWhereInput } from "./CoinsWhereInput";
import { CoinsOrderByInput } from "./CoinsOrderByInput";

export type CoinsFindManyArgs = {
  where?: CoinsWhereInput;
  orderBy?: Array<CoinsOrderByInput>;
  skip?: number;
  take?: number;
};
