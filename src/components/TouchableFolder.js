import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const TouchableFolder = props => {
   const { icon, onPress, children } = props;

   return (
      <TouchableOpacity
         style={styles.button}
         onPress={onPress}
      >
         <FontAwesomeIcon
            icon={icon}
            size={40}
            color={'#fecc6d'}
         />
         <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      alignItems: 'center',
      marginBottom: 10,
   },
   text: {
      fontFamily: 'Quicksand-SemiBold',
      lineHeight: 20,
      fontSize: 12,
   },
});

export default TouchableFolder;
