import { createContext } from "react";
import { User } from "../types/user";

type UserContextValue = {
  //型定義
  user: User | null; //userの型はuserまたはnull
  setUser: (user: User | null) => void; //setUserの型はUserまたはnullを引数としてsetする関数
};

//Contextを定義
export const UserContext = createContext<UserContextValue>({
  //<>内は型定義
  user: null,
  setUser: () => {},
});
