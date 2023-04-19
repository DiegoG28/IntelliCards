import React, { useCallback } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import GoogleButton from '@components/GoogleButton';
import Layout from '@components/Layout';
import rectangularLogo from '@assets/rectangular-logo.png';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import {
   makeRedirectUri,
   useAuthRequest,
   ResponseType,
} from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
   const navigation = useNavigation();

   const discovery = {
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenEndpoint: 'https://oauth2.googleapis.com/token',
      revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
   };

   const [request, response, promptAsync] = useAuthRequest(
      {
         clientId:
            '621833253404-hkbp55ntsdu7anon0uaia0clfcjuflkd.apps.googleusercontent.com',
         scopes: ['openid', 'profile', 'email'],
         responseType: ResponseType.Token,
         usePKCE: false,
         redirectUri: makeRedirectUri({ useProxy: true }),
      },
      discovery
   );

   const handleGoogleSignIn = useCallback(async () => {
      try {
         console.log('Redirect URI:', makeRedirectUri({ useProxy: true }));
         const authResult = await promptAsync();

         if (authResult.type === 'success') {
            navigation.navigate('Home');
         }
      } catch (error) {
         console.log('Error during Google sign in:', error);
      }
   }, [promptAsync, navigation]);

   return (
      <Layout>
         <View style={styles.container}>
            <Image source={rectangularLogo} style={styles.image} />
            <Text style={styles.text}>
               Inicia sesión fácilmente con tu cuenta de Google. No te
               preocupes, tus datos están completamente seguros.
            </Text>
            <GoogleButton onPress={handleGoogleSignIn} />
         </View>
      </Layout>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   image: {
      width: 260,
      height: 70,
      marginBottom: 30,
   },
   text: {
      fontSize: 18,
      fontFamily: 'Inter',
      textAlign: 'center',
      marginBottom: 50,
   },
});

export default Login;
