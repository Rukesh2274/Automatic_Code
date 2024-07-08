/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Ads } from "./Ads";
import { AdsCountArgs } from "./AdsCountArgs";
import { AdsFindManyArgs } from "./AdsFindManyArgs";
import { AdsFindUniqueArgs } from "./AdsFindUniqueArgs";
import { CreateAdsArgs } from "./CreateAdsArgs";
import { UpdateAdsArgs } from "./UpdateAdsArgs";
import { DeleteAdsArgs } from "./DeleteAdsArgs";
import { AdsService } from "../ads.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ads)
export class AdsResolverBase {
  constructor(
    protected readonly service: AdsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ads",
    action: "read",
    possession: "any",
  })
  async _adsItemsMeta(
    @graphql.Args() args: AdsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Ads])
  @nestAccessControl.UseRoles({
    resource: "Ads",
    action: "read",
    possession: "any",
  })
  async adsItems(@graphql.Args() args: AdsFindManyArgs): Promise<Ads[]> {
    return this.service.adsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Ads, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ads",
    action: "read",
    possession: "own",
  })
  async ads(@graphql.Args() args: AdsFindUniqueArgs): Promise<Ads | null> {
    const result = await this.service.ads(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ads)
  @nestAccessControl.UseRoles({
    resource: "Ads",
    action: "create",
    possession: "any",
  })
  async createAds(@graphql.Args() args: CreateAdsArgs): Promise<Ads> {
    return await this.service.createAds({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ads)
  @nestAccessControl.UseRoles({
    resource: "Ads",
    action: "update",
    possession: "any",
  })
  async updateAds(@graphql.Args() args: UpdateAdsArgs): Promise<Ads | null> {
    try {
      return await this.service.updateAds({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ads)
  @nestAccessControl.UseRoles({
    resource: "Ads",
    action: "delete",
    possession: "any",
  })
  async deleteAds(@graphql.Args() args: DeleteAdsArgs): Promise<Ads | null> {
    try {
      return await this.service.deleteAds(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
