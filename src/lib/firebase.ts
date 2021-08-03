import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import Constants from "expo-constants";
import { Shop } from "../types/shops";
import { initialUser, User } from "../types/user";
//lib

// firebaseのAPI keyを取得
if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snapshot = await firebase
    .firestore()
    .collection("shops")
    .orderBy("score", "desc")
    .get(); //DocumentSnapshotを取得　firebase.firestoreはdb　.colleciton()はコレクションへの参照
  const shops = snapshot.docs.map((doc) => doc.data() as Shop); //map関数を使ってdocs展開をして一つずつdataメソッドでデータのオブジェクトを取得

  return shops;
};

//テストコード
// const db = firebase.firestore();
// const querySnapshot = await db.collection("shops").get();

// const shop = querySnapshot.docs.map((doc) => doc.data());　//map関数を使ってdocs展開をして一つずつdataメソッドでデータのオブジェクトを取得
// console.log(shop);

// console.log(shopDocumentReference);

export const signin = async () => {
  const userCredintial = await firebase.auth().signInAnonymously(); //匿名ログイン
  const { uid } = userCredintial.user;
  const userDoc = await firebase.firestore().collection("users").doc(uid).get();
  console.log(userDoc.data());
  if (!userDoc.exists) {
    //userDocに値がなかったら新たにセット
    await firebase.firestore().collection("users").doc(uid).set(initialUser);
    return {
      ...initialUser,
      id: uid,
    } as User;
  } else {
    //値がある場合はそのまま展開してreturn
    return {
      id: uid,
      ...userDoc.data(), //docmentのdataの中にはidがないので別でid:uidとして設定している
    } as User;
  }
};
