import { StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const IconButton = props => {
   const { icon, color, onPress } = props;
   // const onClick = () => {
   //    alert('Hola Amor');
   // };

   return (
      <Pressable
         style={styles.button}
         onPress={onPress}
         backgroundColor={color}
      >
         <FontAwesomeIcon icon={icon} size={20} />
      </Pressable>
   );
};

const styles = StyleSheet.create({
   button: {
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      paddingVertical: 8,
      paddingHorizontal: 25,
      justifyContent: 'center',
   },
   text: {
      fontFamily: 'Quicksand-SemiBold',
      lineHeight: 20,
      fontSize: 16,
   },
});

export default IconButton;
