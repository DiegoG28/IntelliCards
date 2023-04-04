import { StyleSheet, Pressable, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong';

const CustomButton = props => {
   const onClick = () => {
      alert('Hola Amor');
   };

   return (
      <Pressable
         style={styles.button}
         onPress={onClick}
         backgroundColor={props.color}
      >
         <FontAwesomeIcon
            icon={faRightLong}
            size={20}
         />
         {/* <Text style={styles.text}>{props.text}</Text> */}
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

export default CustomButton;
