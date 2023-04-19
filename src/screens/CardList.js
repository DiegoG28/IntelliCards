import { useState } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '@components/Layout';
import TextInput from '@components/CustomTextInput';
import TextButton from '@components/TextButton';
import MinimizedCard from '@components/MinimizedCard';
import logo from '@assets/logo.png';

const CardList = ({ route }) => {
   const { folder } = route.params;
   const [cardInputValue, setCardInputValue] = useState('');
   const [cards, setCards] = useState(folder.cards);

   const handleCreateCard = async () => {
      const newCard = {
         title: cardInputValue,
         origin: 'Dummy Origin',
         insertion: 'Dummy Insertion',
         function: 'Dummy Function',
         innervation: 'Dummy Innervation',
      };

      // Crear una nueva lista de tarjetas que incluya la nueva tarjeta
      const newCards = cards.concat(newCard);

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
                     origin={card.origin}
                     key={index}
                  />
               ))}
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
