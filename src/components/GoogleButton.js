import { StyleSheet, Pressable, Image, Text } from 'react-native';

import googleLogo from '@assets/google-logo.png';

const GoogleButton = () => {
   return (
      <Pressable style={styles.button}>
         <Image source={googleLogo} style={styles.icon} />
         <Text style={styles.text}>Acceder con Google</Text>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderRadius: 4,
      borderWidth: 2,
      paddingHorizontal: 10,
      paddingVertical: 8,
   },
   icon: {
      width: 20,
      height: 20,
      marginRight: 10,
   },
   text: {
      fontFamily: 'Quicksand-SemiBold',
      color: '#000',
      fontSize: 16,
   },
});

export default GoogleButton;
