import { StyleSheet, View, Image, Text } from 'react-native';
import GoogleButton from '@components/GoogleButton';
import Layout from '@components/Layout';
import rectangularLogo from '@assets/rectangular-logo.png';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID =
   '621833253404-hkbp55ntsdu7anon0uaia0clfcjuflkd.apps.googleusercontent.com';

GoogleSignin.configure({
   webClientId: WEB_CLIENT_ID,
});

const Login = ({ navigation }) => {
   const signInWithGoogle = async () => {
      try {
         await GoogleSignin.hasPlayServices();
         const userInfo = await GoogleSignin.signIn();
         navigation.navigate('Navigation');
         console.log(userInfo);
         // Haz algo con la información del usuario (almacénala en el estado, envíala a tu servidor, etc.)
      } catch (error) {
         console.error('Error al iniciar sesión con Google:', error);
      }
   };

   return (
      <Layout>
         <View style={styles.container}>
            <Image source={rectangularLogo} style={styles.image} />
            <Text style={styles.text}>
               Inicia sesión fácilmente con tu cuenta de Google. No te
               preocupes, tus datos están completamente seguros.
            </Text>
            <GoogleButton onPress={signInWithGoogle} />
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
