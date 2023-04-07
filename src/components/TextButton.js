import { StyleSheet, Pressable, Text, View } from 'react-native';

const TextButton = props => {
   const { text, color, onPress } = props;
   // const onClick = () => {
   //    alert('Hola Amor');
   // };

   return (
      <Pressable
         style={styles.button}
         onPress={onPress}
         backgroundColor={color}
      >
         <Text style={styles.text}>{props.text}</Text>
      </Pressable>
   );
};

const styles = StyleSheet.create({
   button: {
      alignItems: 'center',
      borderRadius: 4,
      borderWidth: 2,
      paddingVertical: 8,
      paddingHorizontal: 10,
      justifyContent: 'center',
   },
   text: {
      fontFamily: 'Quicksand-SemiBold',
      lineHeight: 20,
      fontSize: 16,
   },
});

export default TextButton;
