import WorkoutMiniature from "@/components/WorkoutMiniature";
import images from "@/constants/images";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function History() {
  return (
    <SafeAreaView className="bg-offwhite">
      <ScrollView contentContainerClassName="flex gap-2 items-center p-2">
        <Image source={images.icontransparent} className="size-16 mb-6" />
        <View className="justify-center items-center">
          <Text className="font-inter text-primary text-center tracking-tightest text-[36px] mb-6">
            Your last{" "}
            <Text className="font-doto tracking-tightest">workouts</Text>
          </Text>
          <View className="flex gap-4">
            <WorkoutMiniature
              duration="20mn"
              type="Full Body"
              liked={true}
              done={true}
              title="The Finisher - 1.0"
              format="2x circuit"
              workDuration="40s of Work"
              breakDuration="20s of Break"
              exercises="Squats, Lunges, Pushups, Crunches, Burpees, Lat Pull"
            />
            <WorkoutMiniature
              duration="20mn"
              type="Full Body"
              liked={true}
              done={true}
              title="The Finisher - 1.0"
              format="2x circuit"
              workDuration="40s of Work"
              breakDuration="20s of Break"
              exercises="Squats, Lunges, Pushups, Crunches, Burpees, Lat Pull"
            />
            <WorkoutMiniature
              duration="20mn"
              type="Full Body"
              liked={true}
              done={true}
              title="The Finisher - 1.0"
              format="2x circuit"
              workDuration="40s of Work"
              breakDuration="20s of Break"
              exercises="Squats, Lunges, Pushups, Crunches, Burpees, Lat Pull"
            />
            <WorkoutMiniature
              duration="20mn"
              type="Full Body"
              liked={true}
              done={true}
              title="The Finisher - 1.0"
              format="2x circuit"
              workDuration="40s of Work"
              breakDuration="20s of Break"
              exercises="Squats, Lunges, Pushups, Crunches, Burpees, Lat Pull"
            />
            <WorkoutMiniature
              duration="20mn"
              type="Full Body"
              liked={true}
              done={true}
              title="The Finisher - 1.0"
              format="2x circuit"
              workDuration="40s of Work"
              breakDuration="20s of Break"
              exercises="Squats, Lunges, Pushups, Crunches, Burpees, Lat Pull"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default History;
