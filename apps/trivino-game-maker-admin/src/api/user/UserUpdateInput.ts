import { InputJsonValue } from "../../types";
import { GameUpdateManyWithoutUsersInput } from "./GameUpdateManyWithoutUsersInput";
import { CoinsUpdateManyWithoutUsersInput } from "./CoinsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  games?: GameUpdateManyWithoutUsersInput;
  coinsItems?: CoinsUpdateManyWithoutUsersInput;
};
