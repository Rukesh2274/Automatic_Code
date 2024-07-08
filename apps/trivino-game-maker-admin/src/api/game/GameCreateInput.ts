import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionCreateNestedManyWithoutGamesInput } from "./QuestionCreateNestedManyWithoutGamesInput";
import { GameConfigurationCreateNestedManyWithoutGamesInput } from "./GameConfigurationCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  title?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  questions?: QuestionCreateNestedManyWithoutGamesInput;
  gameConfigurations?: GameConfigurationCreateNestedManyWithoutGamesInput;
};
