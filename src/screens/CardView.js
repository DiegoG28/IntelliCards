import { StyleSheet, View, Image } from 'react-native';
import Layout from '@components/Layout';
import Card from '../components/Card';
import logo from '@assets/logo.png';

const CardView = () => {
   return (
      <Layout>
         <View style={styles.container}>
            <View style={styles.logoContainer}>
               <Image
                  source={logo}
                  style={styles.image}
               />
            </View>
            <View style={styles.cardContainer}>
            <Card 
               title="Serratus Major"
               origin="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
               insertion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
               fuction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
               innervation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
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
   cardContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
});

export default CardView;