import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainTabNavigator } from "../navigation/MainTabNavigator";
/*screen*/
import { AuthScreen } from "./AuthScreen";
export const AppNavigator = () => {
  const user = true;
  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};
