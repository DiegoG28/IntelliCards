import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Onboard from './Onboard';

SplashScreen.preventAutoHideAsync();

export default function App() {
   const [fontsLoaded] = useFonts({
      Quicksand: require('./assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
      Inter: require('./assets/fonts/Inter-Regular.ttf'),
      'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
   });

   const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
         await SplashScreen.hideAsync();
      }
   }, [fontsLoaded]);

   if (!fontsLoaded) {
      return null;
   }

   return (
      <SafeAreaView style={styles.root}>
         <View
            style={styles.container}
            onLayout={onLayoutRootView}
         >
            <Onboard />
            <StatusBar style="auto" />
         </View>
      </SafeAreaView>
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
