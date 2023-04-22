import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";
import StudentProfile from "../screens/StudentProfile";
// import GoalDetailsPage from '../screens/GoalDetailsPage';
// import AddGoalPage from '../screens/AddGoalPage';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="StudentProfile" component={StudentProfile} />
      {/* <Stack.Screen name="GoalDetails" component={GoalDetailsPage} />
      <Stack.Screen name="AddGoal" component={AddGoalPage} /> */}
    </Stack.Navigator>
  );
};
