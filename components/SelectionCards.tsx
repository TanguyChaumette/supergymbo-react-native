import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SelectionCards = (props) => {
  const { title, catchphrase, onPress } = props;
  return (
    <TouchableOpacity
      className="bg-white aspect-2/3 object-cover min-h-60 w-full flex p-4 justify-between shadow-xs rounded-2xl"
      onPress={onPress}
    >
      <Text className="font-doto tracking-tightest text-darkgray text-[16px]">
        {catchphrase}
      </Text>
      <Text className="font-inter tracking-tightest text-[36px] text-primary">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SelectionCards;
