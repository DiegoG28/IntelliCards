import { StyleSheet, Text, View, Pressable } from 'react-native';
import TouchableIcon from './TouchableIcon';
import {
   faShareFromSquare,
   faTrashCan,
   faArrowAltCircleUp,
} from '@fortawesome/free-regular-svg-icons';

const Card = props => {
   const { title, functions, onOpen, onMoveToFolder, onShare, onDelete } =
      props;

   const handleCardView = () => {
      navigation.navigate('CardView');
   };

   return (
      <Pressable onPress={onOpen}>
         <View style={styles.container}>
            <View>
               <Text style={styles.title}>{title}</Text>
               <Text
                  numberOfLines={2}
                  style={styles.subtitle}
               >
                  Función: <Text style={styles.description}>{functions}.</Text>
               </Text>
            </View>
            <View style={styles.iconContainer}>
               <TouchableIcon
                  onPress={onMoveToFolder}
                  icon={faArrowAltCircleUp}
               />
               <TouchableIcon
                  onPress={onShare}
                  icon={faShareFromSquare}
               />
               <TouchableIcon
                  onPress={onDelete}
                  icon={faTrashCan}
               />
            </View>
         </View>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 10,
      paddingVertical: 20,
      backgroundColor: '#FFC8C8',
      borderRadius: 4,
      borderWidth: 2,
      marginBottom: 10,
      minHeight: 145,
      justifyContent: 'space-between',
   },
   title: {
      fontFamily: 'Inter-Bold',
      textAlign: 'left',
      fontSize: 18,
      marginBottom: 10,
   },
   subtitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      marginBottom: 10,
   },
   lastSubtile: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      marginBottom: 0,
   },
   description: {
      fontFamily: 'Inter',
      fontSize: 16,
   },
   iconContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },
});

export default Card;
