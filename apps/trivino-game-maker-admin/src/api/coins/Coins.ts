import { User } from "../user/User";

export type Coins = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  price: number | null;
  user?: User | null;
};
