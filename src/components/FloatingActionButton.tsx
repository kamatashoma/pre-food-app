import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

import { Feather } from "@expo/vector-icons";

const SIZE = 56;

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  iconName: any;
};
const CheckLog = () => {
  console.log("a");
};

export const FloatingActionButton: React.FC<Props> = ({
  onPress,
  iconName,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Feather name={iconName} color="#fff" size={30} />
      <CheckLog />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
});
