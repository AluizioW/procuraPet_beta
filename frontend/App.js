import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen'; 
import DetailsScreen from './src/screens/DetailsScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';

import { Ionicons } from '@expo/vector-icons';
import NewPostScreen from './src/screens/DetailsScreen';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'paw' : 'paw-outline';
            } else if (route.name === 'NewPost') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#66997B',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          
          })}
          >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="NewPost" component={NewPostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        {/* <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;