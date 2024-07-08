export type Ads = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  platform?: "Option1" | null;
  adId: string | null;
  clicks: number | null;
  impressions: number | null;
  revenue: number | null;
};
