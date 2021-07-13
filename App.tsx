import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { StyleSheet, Text, View } from "react-native";
import "firebase/firestore";

// firebaseのAPI keyを取得
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyC5GOdIsjenmG9cGTdrqfgl4zJTwko727A",
    authDomain: "pre-food-app.firebaseapp.com",
    projectId: "pre-food-app",
    storageBucket: "pre-food-app.appspot.com",
    messagingSenderId: "887086148314",
    appId: "1:887086148314:web:8a861d7815245d8ef6d3e3",
    measurementId: "G-4G8P36Z0VR",
  };
  firebase.initializeApp(firebaseConfig);
}

// typescriptなので方を定義
type Shop = {
  name: string;
  place: string;
};
export default function App() {
  const [shopws, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data());
    console.log(shops);
  };

  return (
    <View style={styles.container}>
      <Text>my second app</Text>
      <Text>my second app</Text>
      <Text>my second app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
