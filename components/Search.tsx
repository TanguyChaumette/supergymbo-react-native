import icons from "@/constants/icons";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import React, { useState } from "react";
import { Image, TextInput, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) =>
    router.setParams({ query: text })
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between min-w-full p-3 rounded-2xl bg-white border-darkgray border">
      <View className="flex-1 flex flex-row items-center justify-start z-50 shadow-xs">
        <Image source={icons.search} className="size-8" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search"
          className="font-inter tracking-tightest text-primary ml-2 flex-1"
          placeholderTextColor="darkgray"
        />
      </View>
    </View>
  );
};

export default Search;
