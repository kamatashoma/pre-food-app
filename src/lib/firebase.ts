import firebase from "firebase/app";
import "firebase/firestore";
import Constants from "expo-constants";
import { Shop } from "../types/shops";
//lib

// firebaseのAPI keyを取得
if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snapshot = await firebase.firestore().collection("shops").get(); //DocumentSnapshotを取得　firebase.firestoreはdb　.colleciton()はコレクションへの参照
  const shops = snapshot.docs.map((doc) => doc.data() as Shop); //map関数を使ってdocs展開をして一つずつdataメソッドでデータのオブジェクトを取得

  return shops;
};

//テストコード
// const db = firebase.firestore();
// const querySnapshot = await db.collection("shops").get();

// const shop = querySnapshot.docs.map((doc) => doc.data());　//map関数を使ってdocs展開をして一つずつdataメソッドでデータのオブジェクトを取得
// console.log(shop);

// console.log(shopDocumentReference);
