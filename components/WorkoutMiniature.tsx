import icons from "@/constants/icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const WorkoutMiniature = (props) => {
  const {
    duration,
    type,
    title,
    liked,
    done,
    format,
    workDuration,
    breakDuration,
    exercises,
  } = props;

  return (
    <TouchableOpacity>
      <View className="bg-white min-w-full flex p-4 py-4 pb-6 justify-between shadow-xs rounded-2xl">
        <View className="flex flex-row items-center jutify-between gap-1 pb-6">
          <Text className="font-inter text-primary tracking-tightest text-[14px] px-4 py-3 rounded-2xl border border-darkgray">
            {duration}
          </Text>
          <Text className="font-inter text-primary tracking-tightest text-[14px] px-4 py-3 rounded-2xl border border-darkgray">
            {type}
          </Text>
          <View className="flex flex-row ml-auto gap-2">
            <Image
              source={icons.check}
              className="size-8"
              tintColor={"#191919"}
            ></Image>
            <Image
              source={icons.heart}
              className="size-8"
              tintColor={"#191919"}
            ></Image>
          </View>
        </View>
        <Text className="font-doto text-primary tracking-tightest text-[28px] line-clamp-2 pb-6">
          {title}
        </Text>
        <View className="flex flex-row justify-between pb-2">
          <Text className="font-inter tracking-tightest text-[16px] text-darkgray">
            {format}
          </Text>
          <Text className="font-inter tracking-tightest text-[16px] text-darkgray">
            |
          </Text>
          <Text className="font-inter tracking-tightest text-[16px] text-darkgray">
            {workDuration}
          </Text>
          <Text className="font-inter tracking-tightest text-[16px] text-darkgray">
            |
          </Text>
          <Text className="font-inter tracking-tightest text-[16px] text-darkgray">
            {breakDuration}
          </Text>
        </View>
        <Text className="font-inter text-darkgray tracking-tightest text-[16px] line-clamp-1">
          {exercises}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default WorkoutMiniature;
