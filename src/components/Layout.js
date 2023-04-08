import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Layout = props => {
   const { children } = props;

   return (
      <SafeAreaView style={styles.root}>
         <View style={styles.container}>
            {children}
            <StatusBar style="auto" />
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   root: {
      flex: 1,
      backgroundColor: '#F7F7F9',
   },
   container: {
      flex: 1,
      marginHorizontal: 16,
   },
});

export default Layout;
