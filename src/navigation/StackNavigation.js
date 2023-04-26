import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, StudentProfile, AddStudent, GoalDetails } from "../screens";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Student Profile" component={StudentProfile} />
      <Stack.Screen name="Add Student" component={AddStudent} />
      <Stack.Screen name="Goal Details" component={GoalDetails} />
    </Stack.Navigator>
  );
};
