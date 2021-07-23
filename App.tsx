import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import "firebase/firestore";
// comonents
import { ShopReviewItem } from "./src/components/ShopReviewItem";

import { showCompletionScript } from "yargs";
import { getShops } from "./src/lib/firebase";
import { Shop } from "./src/types/shops";

export default function App() {
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
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
