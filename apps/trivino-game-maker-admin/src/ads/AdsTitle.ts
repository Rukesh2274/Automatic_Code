import { Ads as TAds } from "../api/ads/Ads";

export const ADS_TITLE_FIELD = "adId";

export const AdsTitle = (record: TAds): string => {
  return record.adId?.toString() || String(record.id);
};
