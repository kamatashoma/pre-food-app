import firebase from "firebase";

export type User = {
  id?: string; //任意の値のため「？」をつける
  uid?: string;
  name: string;
  updateAt: firebase.firestore.Timestamp;
  createdAt: firebase.firestore.Timestamp;
};

//userの初期データを定義
export const initialUser: User = {
  name: "",
  updateAt: firebase.firestore.Timestamp.now(),
  createdAt: firebase.firestore.Timestamp.now(),
};
