import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/login'
import DoctorsScreen from './screens/doctors'
import SignupScreen from './screens/signup'
import HomeScreen from './screens/home'
import ContactScreen from './screens/contact'
import NotificationsScreen from './screens/notifications'


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Footer() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#07da5f"
      barStyle={{ backgroundColor: "white" }}
      screenOptions={{headerStyle:{backgroundColor:'#07DA5F'},headerTintColor:'white'}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarLabel: "Notification",
          tabBarIcon: ({ color }) => (
            <AntDesign name="notification" size={26} color="black" /> 
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={DoctorsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                bottom: -20, 
                height: 68,
                width: 68,
                borderRadius: 68,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="pluscircle" color="#07da5f" size={48} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Doctors"
        component={DoctorStackNavigator}
        options={{
          tabBarLabel: "Doctors",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="doctor" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const DoctorStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Doctors" component={DoctorsScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

function App(){
  return(
    
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}} initialRouteName ="Welcome">
        <Stack.Screen name = "Welcome" component = {WelcomeScreen}/>
        <Stack.Screen name = "Login" component = {LoginScreen}/>
        <Stack.Screen  name ="Signup" component ={SignupScreen}/>
        {/* <Stack.Screen name = "Doctors" component ={DoctorsScreen}/>
        <Stack.Screen name = "Contact" component ={ContactScreen}/> */}
        <Stack.Screen name="Footer" component={Footer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },  
 
});
