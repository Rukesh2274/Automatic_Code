/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Ads as PrismaAds } from "@prisma/client";

export class AdsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AdsCountArgs, "select">): Promise<number> {
    return this.prisma.ads.count(args);
  }

  async adsItems(args: Prisma.AdsFindManyArgs): Promise<PrismaAds[]> {
    return this.prisma.ads.findMany(args);
  }
  async ads(args: Prisma.AdsFindUniqueArgs): Promise<PrismaAds | null> {
    return this.prisma.ads.findUnique(args);
  }
  async createAds(args: Prisma.AdsCreateArgs): Promise<PrismaAds> {
    return this.prisma.ads.create(args);
  }
  async updateAds(args: Prisma.AdsUpdateArgs): Promise<PrismaAds> {
    return this.prisma.ads.update(args);
  }
  async deleteAds(args: Prisma.AdsDeleteArgs): Promise<PrismaAds> {
    return this.prisma.ads.delete(args);
  }
}