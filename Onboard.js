import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './Button';

const Onboard = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>
            Autocompletado de información sobre músculos
         </Text>
         <View style={styles.image} />
         <Text style={styles.description}>
            Crea tarjetas escribiendo únicamente el músculo que quieras
            estudiar. Nosotros haremos el resto por ti.
         </Text>
         <View style={styles.buttonContainer}>
            <CustomButton
               text="Siguiente"
               color="#D8B2E5"
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 36,
      paddingBottom: 30,
   },
   image: {
      width: 194,
      height: 194,
      backgroundColor: '#eee',
      marginTop: 30,
      marginBottom: 30,
      alignSelf: 'center',
   },
   title: {
      fontFamily: 'Quicksand-Bold',
      textAlign: 'left',
      fontSize: 25,
   },
   description: {
      fontFamily: 'Inter',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 18,
   },
   buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },
});

export default Onboard;
