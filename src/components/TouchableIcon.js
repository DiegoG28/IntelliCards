import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const TouchableIcon = props => {
   const { icon, onPress } = props;

   return (
      <TouchableOpacity
         style={styles.button}
         onPress={onPress}
      >
         <FontAwesomeIcon icon={icon} size={20} />
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      marginRight: 10
   },
});

export default TouchableIcon;