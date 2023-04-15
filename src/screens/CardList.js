import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Layout from '@components/Layout';
import TextInput from '@components/CustomTextInput';
import TextButton from '@components/TextButton';
import MinimizedCard from '@components/MinimizedCard';
import logo from '@assets/logo.png';

const CardList = () => {
   return (
      <Layout>
         <View style={styles.container}>
            <View style={styles.logoContainer}>
               <Image
                  source={logo}
                  style={styles.image}
               />
            </View>
            <View style={styles.createSection}>
               <TextInput />
               <View style={{ height: 20 }} />
               <TextButton color="#C6E9FB" >Crear tarjeta</TextButton>
            </View>
            <ScrollView>
            <MinimizedCard
               title="Serratus Major"
               origin="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            />
            <MinimizedCard
               title="Serratus Major2"
               origin="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            />
            <MinimizedCard
               title="Serratus Major2"
               origin="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            />
            <MinimizedCard
               title="Serratus Major2"
               origin="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            />
            </ScrollView>
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
   createSection: {
    marginVertical: 40,
   },
   createButton: {
    marginTop: 20,
   },
});

export default CardList;