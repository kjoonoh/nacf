import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import MovieScreen from './pages/MovieScreen';
import TvScreen from './pages/TvScreen';

const Tab = createBottomTabNavigator()

const App = () => {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Movie"
          component={MovieScreen}
        />
        <Tab.Screen 
          name="Tv"
          component={TvScreen}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
};

export default App;