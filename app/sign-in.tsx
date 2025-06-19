import { login } from "@/lib/appwrite";
import { Video } from "expo-av";
import React from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignIn = () => {
  const videoRef = React.useRef(null);

  const handleLogin = async () => {
    const result = await login();

    if (result) {
      console.log("Login Success");
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#D7D9DD]">
      <ScrollView contentContainerClassName="h-full" scrollEnabled={false}>
        <Video
          ref={videoRef}
          source={require("../assets/videos/waving.mp4")}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <View className="pt-24">
          <Text className="text-[36px] font-inter text-center tracking-tightest">
            Welcome to
          </Text>
          <Text className="text-[42px] font-doto text-center tracking-tightest">
            SuperGymbo
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          className="flex flex-row gap-3 items-center justify-center bg-white m-8 p-5 absolute bottom-2 right-0 left-0 shadow-xl"
        >
          <Image
            source={require("../assets/icons/google.png")}
            className="size-6"
          />
          <Text className="text-[20px] font-inter text-center tracking-tightest">
            Sign In with Google
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
