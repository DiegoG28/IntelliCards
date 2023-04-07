import React from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingStack from '@navigation/OnboardingStack';
import Login from '@screens/Login';

const Stack = createStackNavigator();

export default function App() {
   const [fontsLoaded] = useFonts({
      Quicksand: require('@fonts/Quicksand-Regular.ttf'),
      'Quicksand-Bold': require('@fonts/Quicksand-Bold.ttf'),
      'Quicksand-SemiBold': require('@fonts/Quicksand-SemiBold.ttf'),
      Inter: require('@fonts/Inter-Regular.ttf'),
      'Inter-Bold': require('@fonts/Inter-Bold.ttf'),
      'Inter-Light': require('@fonts/Inter-Light.ttf'),
   });

   if (!fontsLoaded) {
      return null;
   }

   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Onboarding"
               component={OnboardingStack}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Login"
               component={Login}
               options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                     name="Login"
                     component={LoginScreen}
                  />

                  <Stack.Screen
                     name="Main"
                     component={MainStack}
                  /> */}
         </Stack.Navigator>
      </NavigationContainer>
   );
}

const styles = StyleSheet.create({
   root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F7F7F9',
   },
   container: {
      flex: 1,
      marginHorizontal: 16,
   },
});
