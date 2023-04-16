import { StyleSheet, View, Image, Text } from 'react-native';
import Layout from '@components/Layout';
import TextInput from '@components/CustomTextInput';
import TextButton from '@components/TextButton';
import IconButton from '@components/IconButton';
import TouchableFolder from '@components/TouchableFolder';
import {faPlus, faFolder } from '@fortawesome/free-solid-svg-icons';
import logo from '@assets/logo.png';

const Home = ({ navigation }) => {
   const handleCardView = () => {
      navigation.navigate('CardView');
   };
   const handleCardList = () => {
      navigation.navigate('CardList');
   };

   return (
      <Layout>
         <View style={styles.container}>
            <View style={styles.logoContainer}>
               <Image
                  source={logo}
                  style={styles.image}
               />
               <Text style={styles.logoText}>IntelliCards</Text>
            </View>
            <View style={styles.createSection}>
               <TextInput />
               <View style={{ height: 20 }} />
               <TextButton color="#C6E9FB" onPress={handleCardView}>Crear tarjeta</TextButton>
            </View>
            <View style={styles.folderSection}>
               <TouchableFolder onPress={handleCardList} icon={faFolder}>Default</TouchableFolder>
               <View style={styles.buttonContainer}>
                  <IconButton
                     icon={faPlus}
                     color="#D8B2E5"
                     onPress={() => console.log('Crear tarjeta')}
                 />
               </View>
            </View>
         </View>
      </Layout>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 30,
   },
   logoContainer: {
      alignItems: 'center',
   },
   image: {
      width: 50,
      height: 50,
   },
   logoText: {
      fontFamily: 'Inter-Bold',
      fontSize: 32,
   },
   createSection: {
      marginVertical: 40,
   },
   folderSection: {
   },
   buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   },
});

export default Home;
