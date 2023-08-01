import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Member from "./pages/Member/Member";
import MemberDetail from "./pages/Member/MemberDetail";
import MemberUpdate from "./pages/Member/MemberUpdate";
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/Profile/ProfileEdit';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MemberStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
    </Stack.Navigator>
  )
}
const ProfileStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  )
}

const Router=()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default Router;