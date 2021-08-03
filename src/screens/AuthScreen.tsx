import React, { useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  SafeAreaView,
} from "react-native";
import { signin } from "../lib/firebase";
import { UserContext } from "../contexts/userContext";

export const AuthScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      setUser(user);
    };
    fetchUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.text}>ログイン中...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#000",
    marginTop: 16,
  },
});
