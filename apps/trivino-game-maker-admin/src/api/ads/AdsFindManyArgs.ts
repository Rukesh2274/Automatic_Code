import { AdsWhereInput } from "./AdsWhereInput";
import { AdsOrderByInput } from "./AdsOrderByInput";

export type AdsFindManyArgs = {
  where?: AdsWhereInput;
  orderBy?: Array<AdsOrderByInput>;
  skip?: number;
  take?: number;
};
