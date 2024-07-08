/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { QuestionCreateNestedManyWithoutGamesInput } from "./QuestionCreateNestedManyWithoutGamesInput";
import { GameConfigurationCreateNestedManyWithoutGamesInput } from "./GameConfigurationCreateNestedManyWithoutGamesInput";

@InputType()
class GameCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QuestionCreateNestedManyWithoutGamesInput,
  })
  @ValidateNested()
  @Type(() => QuestionCreateNestedManyWithoutGamesInput)
  @IsOptional()
  @Field(() => QuestionCreateNestedManyWithoutGamesInput, {
    nullable: true,
  })
  questions?: QuestionCreateNestedManyWithoutGamesInput;

  @ApiProperty({
    required: false,
    type: () => GameConfigurationCreateNestedManyWithoutGamesInput,
  })
  @ValidateNested()
  @Type(() => GameConfigurationCreateNestedManyWithoutGamesInput)
  @IsOptional()
  @Field(() => GameConfigurationCreateNestedManyWithoutGamesInput, {
    nullable: true,
  })
  gameConfigurations?: GameConfigurationCreateNestedManyWithoutGamesInput;
}

export { GameCreateInput as GameCreateInput };
