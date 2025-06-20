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
      <View className="bg-white w-full flex p-4 py-8 justify-between shadow-xs">
        <View className="flex flex-row items-center jutify-between gap-8 pb-6">
          <Text className="font-inter text-primary tracking-tightest text-[20px]">
            {duration}
          </Text>
          <Text className="font-inter text-primary tracking-tightest text-[20px]">
            {type}
          </Text>
          <View className="flex flex-row">
            <Image source={icons.heart} className="size-8"></Image>
            <Image source={icons.check} className="size-8"></Image>
          </View>
        </View>
        <Text className="font-inter text-primary tracking-tightest text-[24px] line-clamp-3 pb-6">
          {title}
        </Text>
        <View className="flex flex-row gap-4 pb-2">
          <Text className="font-inter text-primary tracking-tightest text-[16px]">
            {format}
          </Text>
          <Text className="font-inter text-primary tracking-tightest text-[16px]">
            |
          </Text>
          <Text className="font-inter text-primary tracking-tightest text-[16px]">
            {workDuration}
          </Text>
          <Text className="font-inter text-primary tracking-tightest text-[16px]">
            |
          </Text>
          <Text className="font-inter text-primary tracking-tightest text-[16px]">
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
