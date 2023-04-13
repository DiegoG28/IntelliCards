import { StyleSheet, Text, View } from 'react-native';

const Card = props => {
   const { title, origin, insertion, fuction, innervation } = props;

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.subtitle}>Origen: <Text style={styles.description}>{origin}</Text></Text>
         <Text style={styles.subtitle}>Inserción: <Text style={styles.description}>{insertion}</Text></Text>
         <Text style={styles.subtitle}>Función: <Text style={styles.description}>{fuction}</Text></Text>
         <Text style={styles.lastSubtile}>Inervación: <Text style={styles.description}>{innervation}</Text></Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor:"#FFC8C8",
      borderRadius: 4,
      borderWidth: 2,   
   },
   title: {
      fontFamily: 'Inter-Bold',
      textAlign: 'left',
      fontSize: 18,
      marginBottom: 10
   },
   subtitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 10
   },
   lastSubtile: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 0
   },
   description: {
      fontFamily: 'Inter',
      fontSize: 16,
   }
});

export default Card;