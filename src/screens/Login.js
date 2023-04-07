import { StyleSheet, View, Image, Text } from 'react-native';
import rectangularLogo from '@assets/rectangular-logo.png';
import GoogleButton from '@components/GoogleButton';
import Layout from '@components/Layout';

const Login = () => {
   return (
      <Layout>
         <View style={styles.container}>
            <Image source={rectangularLogo} style={styles.image} />
            <Text style={styles.text}>
               Inicia sesión fácilmente con tu cuenta de Google. No te
               preocupes, tus datos están completamente seguros.
            </Text>
            <GoogleButton />
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
