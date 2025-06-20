import SelectionCards from "@/components/SelectionCards";
import images from "@/constants/images";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-offwhite">
      <View className="flex h-full gap-2 items-center p-2 px-3">
        <Image source={images.icontransparent} className="size-16 mb-6" />

        <View className="justify-center items-center">
          <Text className="font-inter text-primary text-center tracking-tightest text-[36px] mb-6">
            How long can you{" "}
            <Text className="font-doto tracking-tightest text-[39px]">
              workout
            </Text>{" "}
            today?
          </Text>
          <View className="flex-row flex-wrap justify-center gap-2">
            <View className="grow">
              <SelectionCards title="10mn" catchphrase="Energizer" />
            </View>
            <View className="grow">
              <SelectionCards title="20mn" catchphrase="Get Movin'" />
            </View>
            <View className="grow">
              <SelectionCards title="30mn" catchphrase="Just Enough" />
            </View>
            <View className="grow">
              <SelectionCards title="40mn" catchphrase="Full Session" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
