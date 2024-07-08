import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionUpdateManyWithoutGamesInput } from "./QuestionUpdateManyWithoutGamesInput";
import { GameConfigurationUpdateManyWithoutGamesInput } from "./GameConfigurationUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  title?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  questions?: QuestionUpdateManyWithoutGamesInput;
  gameConfigurations?: GameConfigurationUpdateManyWithoutGamesInput;
};
