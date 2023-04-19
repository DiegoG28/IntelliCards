import { StyleSheet, Text, View, Image } from 'react-native';
import Layout from '@components/Layout';
import logo from '@assets/logo.png';

const Settings = () => {
   return (
      <Layout>
         <View style={styles.container}>
            <View style={styles.logoContainer}>
               <Image source={logo} style={styles.image} />
            </View>
            <View style={{ height: 40 }} />
            <Text
               style={{
                  textAlign: 'center',
                  marginBottom: 25,
                  fontFamily: 'Inter-Bold',
                  fontSize: 20,
               }}
            >
               Bienvenida, Itzel
            </Text>
            <View style={styles.textContainer}>
               <Text style={{ fontFamily: 'Inter' }}>Cerrar Sesión</Text>
            </View>
         </View>
      </Layout>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 30,
   },
   logoContainer: {
      alignItems: 'center',
   },
   image: {
      width: 50,
      height: 50,
   },
   textContainer: {
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: '#fff',
      borderRadius: 4,
   },
});

export default Settings;
