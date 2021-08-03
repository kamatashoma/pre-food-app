import React, { useState } from "react";
import { AppNavigator } from "./src/screens/AppNavigator";
import { UserContext } from "./src/contexts/userContext";
import { User } from "./src/types/user";

export default function App() {
  //const [状態変数, 状態を変更するための関数] = useState<型>(状態の初期値);
  const [user, setUser] = useState<User>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </UserContext.Provider>
  );
}
