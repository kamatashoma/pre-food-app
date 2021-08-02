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
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export const HomeScreen = ({ navigation }: Props) => {
  const [shops, setShops] = useState<Shop[]>([]);
  // useStateの後の<Shop>は型の定義。なくてもいいけどあったほうがbetter
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);

    //テストコード
    // const db = firebase.firestore();
    // const querySnapshot = await db.collection("shops").get();

    // const shop = querySnapshot.docs.map((doc) => doc.data());　//map関数を使ってdocs展開をして一つずつdataメソッドでデータのオブジェクトを取得
    // console.log(shop);

    // console.log(shopDocumentReference);
  };

  //これはもう使っていない下記のFlatListで表示している
  //FlatListの方が早い

  const onPressShop = (shop: Shop) => {
    navigation.navigate("Shop", { shop });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} onPress={() => onPressShop(item)} />
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
