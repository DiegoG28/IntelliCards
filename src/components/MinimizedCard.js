import { StyleSheet, Text, View} from 'react-native';
import TouchableIcon from './TouchableIcon';
import { faShareFromSquare, faTrashCan, faArrowAltCircleUp} from '@fortawesome/free-regular-svg-icons';

const Card = props => {
   const { title, origin} = props;

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <Text numberOfLines={3} style={styles.subtitle}>Origen: <Text style={styles.description}>{origin}</Text></Text>
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
   );
};

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor:"#FFC8C8",
      borderRadius: 4,
      borderWidth: 2,  
      marginBottom: 10 
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
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
});

export default Card;