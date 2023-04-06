import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '@components/Button';

const Onboard = props => {
   const { title, image, children } = props;

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <View style={styles.image} />
         <Text style={styles.description}>{children}</Text>
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
      marginVertical: 30,
      alignSelf: 'center',
   },
   title: {
      fontFamily: 'Quicksand-Bold',
      textAlign: 'left',
      fontSize: 25,
   },
   description: {
      fontFamily: 'Inter',
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
