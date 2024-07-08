/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CoinsWhereUniqueInput } from "../../coins/base/CoinsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CoinsUpdateManyWithoutUsersInput {
  @Field(() => [CoinsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CoinsWhereUniqueInput],
  })
  connect?: Array<CoinsWhereUniqueInput>;

  @Field(() => [CoinsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CoinsWhereUniqueInput],
  })
  disconnect?: Array<CoinsWhereUniqueInput>;

  @Field(() => [CoinsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CoinsWhereUniqueInput],
  })
  set?: Array<CoinsWhereUniqueInput>;
}

export { CoinsUpdateManyWithoutUsersInput as CoinsUpdateManyWithoutUsersInput };
