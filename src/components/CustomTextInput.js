import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';

const CustomTextInput = () => {
   return (
      <View style={styles.container}>
         <FontAwesomeIcon
            icon={faPen}
            size={20}
            style={styles.icon}
         />
         <TextInput
            style={styles.input}
            placeholder="Escribe el músculo"
            underlineColorAndroid="transparent"
         />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 3,
      padding: 10,
   },
   icon: {
      marginRight: 10,
   },
   input: {
      flex: 1,
      backgroundColor: '#fff',
      color: '#424242',
      borderRadius: 3,
   },
});

export default CustomTextInput;
