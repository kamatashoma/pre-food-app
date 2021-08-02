import { Shop } from "./shops";

export type RootStackParamList = {
  Home: undefined;
  Shop: { shop: Shop };
  User: undefined;
  CreateReview: { shop: Shop };
  Main: undefined;
};
