export interface WorkoutStep {
  name: string;
  duration: number; // in seconds
  videoUrl: any; // require for local asset
  isBreak: boolean;
}

export interface WorkoutByDuration {
  title: string;
  type: string;
  duration: number;
  steps: WorkoutStep[];
}

export interface WorkoutType {
  name: string;
  type: string;
  workouts: {
    [duration: number]: WorkoutByDuration;
  };
}

export interface WorkoutTypes {
  [key: string]: WorkoutType;
}

export const workoutTypes: WorkoutTypes = {
  fullBody: {
    name: 'All In',
    type: 'Full Body',
    workouts: {
      10: {
        title: '10-Minute Full Body Blast',
        type: 'fullBody',
        duration: 10,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Jumping Jacks', duration: 40, videoUrl: require('../assets/videos/jumping-jacks.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: require('../assets/videos/pushups.mp4'), isBreak: false },
          { name: 'Squats', duration: 40, videoUrl: require('../assets/videos/squats.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Mountain Climbers', duration: 40, videoUrl: require('../assets/videos/mountain-climbers.mp4'), isBreak: false },
          { name: 'Plank', duration: 40, videoUrl: require('../assets/videos/plank.mp4'), isBreak: false }
        ]
      },
      20: {
        title: '20-Minute Full Body Blast',
        type: 'fullBody',
        duration: 20,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Jumping Jacks', duration: 40, videoUrl: require('../assets/videos/jumping-jacks.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: require('../assets/videos/pushups.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Lunge alt forward', duration: 40, videoUrl: require('../assets/videos/lunge-alt-forward.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Plank Row', duration: 40, videoUrl: require('../assets/videos/plank-row.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Burpees', duration: 40, videoUrl: require('../assets/videos/burpees.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Squat Jump', duration: 40, videoUrl: require('../assets/videos/squat-jump.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Diamond Pushup', duration: 40, videoUrl: require('../assets/videos/diamond-pushup.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Plank Knee Tuck', duration: 40, videoUrl: require('../assets/videos/plank-knee-tuck.mp4'), isBreak: false },
        ]
      },
      30: {
        title: '30-Minute Full Body Blast',
        type: 'fullBody',
        duration: 30,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Jump Split Lunge', duration: 40, videoUrl: require('../assets/videos/jump-split-lunge.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: require('../assets/videos/pushups.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Squat Hold', duration: 40, videoUrl: require('../assets/videos/squat-hold.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Mountain Climbers', duration: 40, videoUrl: require('../assets/videos/mountain-climbers.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Fast Feet', duration: 40, videoUrl: require('../assets/videos/fast-feet.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Plank Row', duration: 40, videoUrl: require('../assets/videos/plank-row.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Glute Bridges', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Superman Extension', duration: 40, videoUrl: require('../assets/videos/superman-extension.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Bicycle Kicks', duration: 40, videoUrl: require('../assets/videos/bicycle-kicks.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Shoulder Taps', duration: 40, videoUrl: require('../assets/videos/shoulder-taps.mp4'), isBreak: false }
        ]
      },
      40: {
        title: '40-Minute Full Body Blast',
        type: 'fullBody',
        duration: 40,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Jumping Jacks', duration: 40, videoUrl: require('../assets/videos/jumping-jacks.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Push-ups', duration: 40, videoUrl: require('../assets/videos/pushups.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Lung Alt Forward', duration: 40, videoUrl: require('../assets/videos/lunges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Plank Row', duration: 40, videoUrl: require('../assets/videos/plank-row.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Burpees', duration: 40, videoUrl: require('../assets/videos/burpees.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Diamond Pushup', duration: 40, videoUrl: require('../assets/videos/diamond-pushup.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Glute Bridges', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Jump Split Lunge', duration: 40, videoUrl: require('../assets/videos/jump-split-lunge.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Plank Knee Tuck', duration: 40, videoUrl: require('../assets/videos/plank-knee-tuck.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Squat Jump', duration: 40, videoUrl: require('../assets/videos/squat-jump.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Superman Extension', duration: 40, videoUrl: require('../assets/videos/superman-extension.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Shoulder Taps', duration: 40, videoUrl: require('../assets/videos/shoulder-taps.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Plank', duration: 40, videoUrl: require('../assets/videos/plank.mp4'), isBreak: false }
        ]
      }
    }
  },
  lowerBody: {
    name: 'Leg Day',
    type: 'Lower Body',
    workouts: {
      10: {
        title: '10-Minute Leg Burner',
        type: 'lowerBody',
        duration: 10,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Bodyweight Squats', duration: 40, videoUrl: require('../assets/videos/squats.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Lunges', duration: 40, videoUrl: require('../assets/videos/lunges.mp4'), isBreak: false },
          { name: 'Glute Bridges', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Wall Sit', duration: 40, videoUrl: require('../assets/videos/wall-sit.mp4'), isBreak: false },
          { name: 'Calf Raises', duration: 40, videoUrl: require('../assets/videos/calf-raises.mp4'), isBreak: false }
        ]
      },
      20: {
        title: '20-Minute Leg Burner',
        type: 'lowerBody',
        duration: 20,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Bodyweight Squats', duration: 40, videoUrl: require('../assets/videos/squats.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Lunges', duration: 40, videoUrl: require('../assets/videos/lunges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Glute Bridges', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Wall Sit', duration: 40, videoUrl: require('../assets/videos/wall-sit.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Calf Raises', duration: 40, videoUrl: require('../assets/videos/calf-raises.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Jump Squats', duration: 40, videoUrl: require('../assets/videos/squat-jump.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Reverse Lunges', duration: 40, videoUrl: require('../assets/videos/lunge-alt-forward.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Side Lunges', duration: 40, videoUrl: require('../assets/videos/lunge-alt-forward.mp4'), isBreak: false },
        ]
      },
      30: {
        title: '30-Minute Leg Burner',
        type: 'lowerBody',
        duration: 30,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Bodyweight Squats', duration: 40, videoUrl: require('../assets/videos/squats.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Lunges', duration: 40, videoUrl: require('../assets/videos/lunges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Glute Bridges', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Wall Sit', duration: 40, videoUrl: require('../assets/videos/wall-sit.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Calf Raises', duration: 40, videoUrl: require('../assets/videos/calf-raises.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Jump Squats', duration: 40, videoUrl: require('../assets/videos/squat-jump.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Reverse Lunges', duration: 40, videoUrl: require('../assets/videos/lunge-alt-forward.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Side Lunges', duration: 40, videoUrl: require('../assets/videos/lunge-alt-forward.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Single Leg Glute Bridge', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Wall Sit', duration: 40, videoUrl: require('../assets/videos/wall-sit.mp4'), isBreak: false }
        ]
      },
      40: {
        title: '40-Minute Leg Burner',
        type: 'lowerBody',
        duration: 40,
        steps: [
          { name: 'Get Ready', duration: 10, videoUrl: require('../assets/videos/start-1.mp4'), isBreak: false },
          { name: 'Bodyweight Squats', duration: 40, videoUrl: require('../assets/videos/squats.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Lunges', duration: 40, videoUrl: require('../assets/videos/lunges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Glute Bridges', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Wall Sit', duration: 40, videoUrl: require('../assets/videos/wall-sit.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Calf Raises', duration: 40, videoUrl: require('../assets/videos/calf-raises.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Jump Squats', duration: 40, videoUrl: require('../assets/videos/squat-jump.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Reverse Lunges', duration: 40, videoUrl: require('../assets/videos/lunge-alt-forward.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Side Lunges', duration: 40, videoUrl: require('../assets/videos/lunge-alt-forward.mp4'), isBreak: false },
          { name: 'Break', duration: 60, videoUrl: require('../assets/videos/break-2.mp4'), isBreak: true },
          { name: 'Single Leg Glute Bridge', duration: 40, videoUrl: require('../assets/videos/glute-bridges.mp4'), isBreak: false },
          { name: 'Break', duration: 20, videoUrl: require('../assets/videos/break-1.mp4'), isBreak: true },
          { name: 'Wall Sit', duration: 40, videoUrl: require('../assets/videos/wall-sit.mp4'), isBreak: false }
        ]
      }
    }
  },
  // ... Add upperBody and cardioHIIT in the same format ...
}; 