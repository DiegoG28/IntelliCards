import { StyleSheet, View } from 'react-native';
import Layout from '@components/Layout';
import Card from '../components/Card';

const CardView = () => {
   return (
      <Layout>
         <View style={styles.container}>
         <Card 
            title="Serratus Major"
            origin="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            insertion="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            fuction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            innervation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
         </View>
      </Layout>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   }
});

export default CardView;