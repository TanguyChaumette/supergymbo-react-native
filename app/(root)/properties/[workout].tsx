import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Workout = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Workout {id}</Text>
    </View>
  );
};

export default Workout;
