import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SIZES, FONTS, colors, spacing} from './constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreensRoute from './navigation/screens';
import {extendTheme, NativeBaseProvider} from 'native-base';

import {Text} from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  const defaultScreen = ScreensRoute.find(i => i.primary).name;
  console.log(defaultScreen);

  const theme = extendTheme({
    spacing,
    SIZES,
    FONTS,
    colors,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={authen == false ? 'defaultScreen' : defaultScreen}
        initialRouteName={defaultScreen}
        screenOptions={{
          headerShown: false,
        }}>
        {ScreensRoute.map(i => (
          <Stack.Screen
            name={i.name}
            component={i.component}
            key={i.name}
            options={{
              title: i.title,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'MavenPro-Regular',
    fontWeight: 'bold',
  },
});
