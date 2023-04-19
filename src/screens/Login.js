import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import GoogleButton from '@components/GoogleButton';
import Layout from '@components/Layout';
import rectangularLogo from '@assets/rectangular-logo.png';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
   const [accessToken, setAccessToken] = useState(null);
   const [user, setUser] = useState(null);
   const navigation = useNavigation();

   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
      clientId:
         '621833253404-kkvm74rtt7p5nkq46fdgjo6dgh21icl0.apps.googleusercontent.com',
      scopes: ['openid', 'profile', 'email'],
   });

   useEffect(() => {
      if (response?.type === 'success') {
         setAccessToken(response.authentication.accessToken);
      }
   }, [response]);

   useEffect(() => {
      if (accessToken) {
         fetchUserInfo();
      }
   }, [accessToken]);

   async function fetchUserInfo() {
      let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
         headers: { Authorization: `Bearer ${accessToken}` },
      });
      const userInfo = await response.json();
      setUser(userInfo);
      navigation.navigate('Navigation');
   }

   return (
      <Layout>
         <View style={styles.container}>
            <Image source={rectangularLogo} style={styles.image} />
            <Text style={styles.text}>
               Inicia sesión fácilmente con tu cuenta de Google. No te
               preocupes, tus datos están completamente seguros.
            </Text>
            <GoogleButton
               onPress={() => {
                  promptAsync();
               }}
            />
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
