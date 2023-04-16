import { StyleSheet, Text, View } from 'react-native';
import TouchableIcon from './TouchableIcon';
import { faShareFromSquare, faTrashCan, faArrowAltCircleUp, faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Card = props => {
   const { title, origin, insertion, fuction, innervation } = props;

   return (
      <View>
         <View style={styles.bottonClose}>
            <TouchableIcon
               onPress={() => console.log('cerrar card')} 
               icon={faCircleXmark}/>
         </View>
         <View style={styles.card}>
            <View style={styles.titleSection}>
               <Text style={styles.title}>{title}</Text>
               <View style={styles.iconContainer}> 
                  <TouchableIcon
                     onPress={() => console.log('pruebita:)')} 
                     icon={faArrowAltCircleUp}/>
                  <TouchableIcon
                     onPress={() => console.log('pruebita:)')} 
                     icon={faShareFromSquare}/>
                  <TouchableIcon 
                     onPress={() => console.log('pruebita:)')} 
                     icon={faTrashCan}/>
               </View>
            </View>
            <Text style={styles.subtitle}>Origen: <Text style={styles.description}>{origin}</Text></Text>
            <Text style={styles.subtitle}>Inserción: <Text style={styles.description}>{insertion}</Text></Text>
            <Text style={styles.subtitle}>Función: <Text style={styles.description}>{fuction}</Text></Text>
            <Text style={styles.lastSubtile}>Inervación: <Text style={styles.description}>{innervation}</Text></Text>
         </View>
         <View style={styles.arrowContainer}>
            <TouchableIcon
               onPress={() => console.log('izquierda')} 
               icon={faAngleLeft}/>
            <TouchableIcon
               onPress={() => console.log('derecha')} 
               icon={faAngleRight }/>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   card: {
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
   },
   iconContainer: {
      flexDirection: "row",
   },
   titleSection: {
      flexDirection: "row",
      justifyContent: 'space-between'
   },
   arrowContainer: {
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop: 10
   },
   bottonClose: {
      flexDirection: "row",
      justifyContent: 'flex-end',
      marginBottom: 5
   }
});

export default Card;