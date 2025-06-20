import icons from "@/constants/icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      className="size-9"
      tintColor={focused ? "#191919" : "#848484"}
      resizeMode="contain"
    />
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          minHeight: 70,
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={72} // adjust for stronger/softer blur
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)", // ensure opacity still applies
              backdropFilter: "blur(64)", // web only; for native, intensity controls blur
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.weight} focused={focused} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.history} focused={focused} title="History" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.search} focused={focused} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.profile} focused={focused} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
