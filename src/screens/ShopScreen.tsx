import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

/*types*/
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
/*compoent*/
import { FloatingActionButton } from "../components/FloatingActionButton";
import { ShopDetail } from "../../src/components/ShopDetail";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};

export const ShopScreen: React.FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: shop.name });
  }, [shop]); // 第2引数には副作用関数の実行タイミングを制御する依存データを記述
  return (
    <SafeAreaView style={styles.container}>
      <ShopDetail shop={shop} />
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("CreateReview", { shop })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
