import { useState } from 'react';
import { StyleSheet, View, Image, Modal, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import Layout from '@components/Layout';
import TextButton from '@components/TextButton';
import Card from '../components/Card';
import logo from '@assets/logo.png';

const CardView = ({ route, navigation }) => {
   const { card, folder, folders } = route.params;

   const [selectedFolderName, setSelectedFolderName] = useState('');
   const [selectedFolder, setSelectedFolder] = useState({});
   const [modalVisible, setModalVisible] = useState(false);

   const handleCloseCard = () => {
      navigation.navigate('Home');
   };

   const handleSelectedFolder = async folderName => {
      setSelectedFolderName(folderName);
      const folder = folders.find(folder => folder.name === folderName);
      setSelectedFolder(folder);
   };

   const handleMoveCard = async () => {
      if (!selectedFolderName) return;

      // Crear una nueva lista de tarjetas que excluya la tarjeta movida
      const newCards = folder.cards.filter(card => card.title !== card.title);

      // Actualizar la propiedad "cards" de la carpeta
      folder.cards = newCards;

      try {
         // Obtener la lista de carpetas del almacenamiento local
         const folders = await AsyncStorage.getItem('folders');

         if (folders !== null) {
            // Convertir la lista de carpetas de una cadena JSON a un objeto JavaScript
            const parsedFolders = JSON.parse(folders);

            // Encontrar la carpeta que se actualizó en la lista de carpetas
            const updatedFolderIndex = parsedFolders.findIndex(
               f => f.name === folder.name,
            );
            parsedFolders[updatedFolderIndex] = folder;

            // Guardar la lista actualizada de carpetas en el almacenamiento local
            await AsyncStorage.setItem(
               'folders',
               JSON.stringify(parsedFolders),
            );
         }
      } catch (error) {
         console.error('Error updating folders:', error);
      }

      // Agregar la nueva tarjeta a la propiedad "cards" de la carpeta
      selectedFolder.cards.push(card);

      // Guardar la lista actualizada de carpetas en el almacenamiento local
      await AsyncStorage.setItem('folders', JSON.stringify(folders));

      setModalVisible(false);
      handleCloseCard();
   };

   const handleDeleteCard = async () => {
      // Crear una nueva lista de tarjetas que excluya la tarjeta eliminada
      const newCards = folder.cards.filter(c => c.title !== card.title);

      // Actualizar la propiedad "cards" de la carpeta
      folder.cards = newCards;

      try {
         // Obtener la lista de carpetas del almacenamiento local
         const folders = await AsyncStorage.getItem('folders');

         if (folders !== null) {
            // Convertir la lista de carpetas de una cadena JSON a un objeto JavaScript
            const parsedFolders = JSON.parse(folders);

            // Encontrar la carpeta que se actualizó en la lista de carpetas

            const updatedFolderIndex = parsedFolders.findIndex(
               f => f.name === folder.name,
            );
            parsedFolders[updatedFolderIndex] = folder;

            // Guardar la lista actualizada de carpetas en el almacenamiento local
            await AsyncStorage.setItem(
               'folders',
               JSON.stringify(parsedFolders),
            );
            handleCloseCard();
         }
      } catch (error) {
         console.error('Error updating folders:', error);
      }
   };

   return (
      <Layout>
         <View style={styles.container}>
            <View style={styles.logoContainer}>
               <Image
                  source={logo}
                  style={styles.image}
               />
            </View>
            <View style={{ marginTop: 30 }}>
               <Text
                  style={{
                     fontFamily: 'Quicksand-Bold',
                     textAlign: 'center',
                     fontSize: 20,
                  }}
               >
                  Carpeta: {folder.name}
               </Text>
            </View>
            <View style={styles.cardContainer}>
               <Card
                  data={card}
                  onClose={handleCloseCard}
                  onMoveToFolder={() => {
                     setModalVisible(true);
                  }}
                  onDelete={handleDeleteCard}
               />
            </View>
         </View>
         <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
         >
            <View
               style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
               }}
            >
               <View
                  style={{
                     backgroundColor: '#fff',
                     padding: 20,
                     borderRadius: 5,
                     borderWidth: 2,
                  }}
               >
                  <Picker
                     selectedValue={selectedFolderName}
                     onValueChange={selectedValue =>
                        handleSelectedFolder(selectedValue)
                     }
                  >
                     <Picker.Item
                        label="Seleccione una carpeta"
                        value=""
                     />
                     {folders.map((item, index) => {
                        if (item.name !== folder.name) {
                           return (
                              <Picker.Item
                                 label={item.name}
                                 value={item.name}
                                 key={index}
                              />
                           );
                        }
                        return null;
                     })}
                  </Picker>
                  <View style={{ marginBottom: 15 }} />
                  <TextButton
                     color="#C6E9FB"
                     onPress={handleMoveCard}
                  >
                     Mover
                  </TextButton>
               </View>
            </View>
         </Modal>
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
