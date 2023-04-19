import { StyleSheet, Text, View, Image } from 'react-native';
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong';
import IconButton from '@components/IconButton';
import TextButton from '@components/TextButton';

const Onboard = props => {
   const { title, image, children, isLastScreen, onNextClick } = props;

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <Image source={image} style={styles.image} />
         <Text style={styles.description}>{children}</Text>
         <View style={styles.buttonContainer}>
            {isLastScreen ? (
               <TextButton color="#C6E9FB" onPress={onNextClick}>
                  Comenzar
               </TextButton>
            ) : (
               <IconButton
                  icon={faRightLong}
                  color="#D8B2E5"
                  onPress={onNextClick}
               />
            )}
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 36,
      paddingBottom: 30,
   },
   image: {
      width: 194,
      height: 194,
      marginVertical: 30,
      alignSelf: 'center',
   },
   title: {
      fontFamily: 'Quicksand-Bold',
      textAlign: 'left',
      fontSize: 25,
   },
   description: {
      fontFamily: 'Inter',
      textAlign: 'center',
      fontSize: 18,
   },
   buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   },
});

export default Onboard;
