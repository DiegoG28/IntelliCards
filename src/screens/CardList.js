import { useState } from 'react';
import { StyleSheet, View, Image, ScrollView, Modal, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '@components/Layout';
import TextInput from '@components/CustomTextInput';
import TextButton from '@components/TextButton';
import MinimizedCard from '@components/MinimizedCard';
import logo from '@assets/logo.png';

import { MusclesApi } from '@api/MusclesApi';

const CardList = ({ route, navigation }) => {
   const { folder, folders } = route.params;
   const [cards, setCards] = useState(folder.cards);
   const [selectedFolderName, setSelectedFolderName] = useState('');
   const [selectedFolder, setSelectedFolder] = useState({});
   const [selectedCard, setSelectedCard] = useState({});
   const [cardInputValue, setCardInputValue] = useState('');
   const [modalVisible, setModalVisible] = useState(false);
   const { getMuscles } = MusclesApi;

   const handleOpenCard = card => {
      navigation.navigate('CardView', { card, folder, folders });
   };

   const handleSelectedFolder = async folderName => {
      setSelectedFolderName(folderName);
      const folder = folders.find(folder => folder.name === folderName);
      setSelectedFolder(folder);
   };

   const handleMoveCard = async () => {
      if (!selectedFolderName) return;

      // Crear una nueva lista de tarjetas que excluya la tarjeta movida
      const newCards = cards.filter(card => card.title !== selectedCard.title);

      // Actualizar el estado con la nueva lista de tarjetas
      setCards(newCards);

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

            setCards(folder.cards);
         }
      } catch (error) {
         console.error('Error updating folders:', error);
      }

      // Agregar la nueva tarjeta a la propiedad "cards" de la carpeta
      selectedFolder.cards.push(selectedCard);

      // Guardar la lista actualizada de carpetas en el almacenamiento local
      await AsyncStorage.setItem('folders', JSON.stringify(folders));

      setModalVisible(false);
   };

   const handleDeleteCard = async card => {
      // Crear una nueva lista de tarjetas que excluya la tarjeta eliminada
      const newCards = cards.filter(c => c.title !== card.title);

      // Actualizar el estado con la nueva lista de tarjetas
      setCards(newCards);

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

            setCards(folder.cards);
         }
      } catch (error) {
         console.error('Error updating folders:', error);
      }
   };

   const handleCreateCard = async () => {
      const newCard = await getMuscles(cardInputValue);
      //puede agregar mensaje de error
      if (!newCard) return;
      // Crear una nueva lista de tarjetas que incluya la nueva tarjeta
      const newCards = cards.concat({
         title: newCard[0].name,
         origin: newCard[0].origin,
         insertion: newCard[0].insertion,
         function: newCard[0].action,
         innervation: newCard[0].innervation,
      });

      // Actualizar el estado con la nueva lista de tarjetas
      setCards(newCards);

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

            setCards(folder.cards);
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
            <View style={styles.createSection}>
               <TextInput
                  label="Escriba el músculo"
                  onChangeText={setCardInputValue}
               />
               <View style={{ height: 20 }} />
               <TextButton
                  color="#C6E9FB"
                  onPress={handleCreateCard}
               >
                  Crear tarjeta
               </TextButton>
            </View>
            <ScrollView>
               {cards.map((card, index) => (
                  <MinimizedCard
                     title={card.title}
                     functions={card.function}
                     onOpen={() => handleOpenCard(card)}
                     onMoveToFolder={() => {
                        setSelectedCard(card);
                        setModalVisible(true);
                     }}
                     onDelete={() => {
                        handleDeleteCard(card);
                     }}
                     key={index}
                  />
               ))}
            </ScrollView>
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
      marginVertical: 20,
   },
   createButton: {
      marginTop: 20,
   },
});

export default CardList;
