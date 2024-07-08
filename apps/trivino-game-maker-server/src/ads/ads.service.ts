import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdsServiceBase } from "./base/ads.service.base";

@Injectable()
export class AdsService extends AdsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
