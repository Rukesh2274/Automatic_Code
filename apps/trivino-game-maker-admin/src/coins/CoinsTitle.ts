import { Coins as TCoins } from "../api/coins/Coins";

export const COINS_TITLE_FIELD = "id";

export const CoinsTitle = (record: TCoins): string => {
  return record.id?.toString() || String(record.id);
};
