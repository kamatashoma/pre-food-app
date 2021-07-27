import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import "firebase/firestore";
// comonents
import { ShopReviewItem } from "../components/ShopReviewItem";

import { showCompletionScript } from "yargs";
import { getShops } from "../lib/firebase";
import { Shop } from "../types/shops";

export const HomeScreen = ({ navigation }) => {
  const [shops, setShops] = useState<Shop[]>([]);
  // useStateの後の<Shop>は型の定義。なくてもいいけどあった号がbetter
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
    console.log(shops);

    //テストコード
    // const db = firebase.firestore();
    // const querySnapshot = await db.collection("shops").get();

    // const shop = querySnapshot.docs.map((doc) => doc.data());　//map関数を使ってdocs展開をして一つずつdataメソッドでデータのオブジェクトを取得
    // console.log(shop);

    // console.log(shopDocumentReference);
  };

  const shopItems = shops.map((shop, index) => (
    <ShopReviewItem shop={shop} key={index.toString()} />
  ));
  //これはもう使っていない下記のFlatListで表示している
  //FlatListの方が早い

  const onPressShop = () => {
    navigation.navigate("Shop");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} onPress={onPressShop} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
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
});
