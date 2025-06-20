import { categories } from "@/constants/data";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory: "All";
      router.setParams({ filters: "All" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
    // navigation or filter logic here
  };

  return (
    <View className="w-full my-2">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="mb-8"
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryPress(item.category)}
            className={`mr-1 px-4 py-3 rounded-2xl border border-darkgray ${
              selectedCategory === item.category ? "bg-primary" : "bg-white"
            }`}
          >
            <Text
              className={`font-inter text-[14px] tracking-tightest ${
                selectedCategory === item.category
                  ? "text-white"
                  : "text-primary"
              }`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Filters;
