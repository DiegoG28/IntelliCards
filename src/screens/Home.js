import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '@components/Layout';
import TextInput from '@components/CustomTextInput';
import TextButton from '@components/TextButton';
import IconButton from '@components/IconButton';
import TouchableFolder from '@components/TouchableFolder';
import { faPlus, faFolder } from '@fortawesome/free-solid-svg-icons';
import logo from '@assets/logo.png';
import { MusclesApi } from '@api/MusclesApi';

const Home = ({ navigation }) => {
   const { getMuscles } = MusclesApi;
   const [folders, setFolders] = useState([]);
   const [modalVisible, setModalVisible] = useState(false);
   const [muscleInputValue, setMuscleInputValue] = useState('');
   const [folderInputValue, setFolderInputValue] = useState('');

   const handleCardList = (folder) => {
      navigation.navigate('CardList', { folder });
   };

   const handleCreateFolder = async () => {
      // if (!folderInputValue) return;
      const newFolder = {
         name: folderInputValue,
         cards: [],
      };
      const folders = await getFoldersFromLocalStorage();
      const updatedFolders = [...folders, newFolder];
      setFolders(updatedFolders);
      await saveFoldersToLocalStorage(updatedFolders);
      setFolderInputValue('');
      setModalVisible(false);
   };

   const handleCreateCard = async () => {
      // if (!muscleInputValue) return;
      try {
         const dummyCard = await getMuscles(muscleInputValue);
         //puede agregar mensaje de error
         if (!dummyCard) return;
         // Obtener la lista de carpetas del almacenamiento local
         const folders = await getFoldersFromLocalStorage();

         // Encontrar la carpeta actual en la lista de carpetas
         const currentFolder = folders[0];

         // Agregar la nueva tarjeta a la propiedad "cards" de la carpeta
         currentFolder.cards.push({
            title: dummyCard[0].name,
            origin: dummyCard[0].origin,
            insertion: dummyCard[0].insertion,
            function: dummyCard[0].action,
            innervation: dummyCard[0].innervation,
         });

         // Guardar la lista actualizada de carpetas en el almacenamiento local
         await AsyncStorage.setItem('folders', JSON.stringify(folders));

         // Actualizar el estado de la lista de carpetas
         setFolders(folders);
      } catch {
         console.error('Error creating card:');
      }
   };

   const saveFoldersToLocalStorage = async (folders) => {
      try {
         await AsyncStorage.setItem('folders', JSON.stringify(folders));
      } catch {
         console.error('Error saving folders to local storage:');
      }
   };

   const getFoldersFromLocalStorage = async () => {
      try {
         // Obtiene la lista de carpetas y comprueba si ya existe una por defecto
         let folders = await AsyncStorage.getItem('folders');
         if (folders === null) {
            const defaultFolder = { name: 'Mi carpeta', cards: [] };
            await AsyncStorage.setItem(
               'folders',
               JSON.stringify([defaultFolder])
            );
            return [defaultFolder];
         }
         folders = JSON.parse(folders);

         // Comprueba si la carpeta por defecto es la primera en la lista, si no, la coloca al principio
         const defaultFolderIndex = folders.findIndex(
            (folder) => folder.name === 'Mi carpeta'
         );
         if (defaultFolderIndex !== 0) {
            const defaultFolder = folders.splice(defaultFolderIndex, 1)[0];
            folders.unshift(defaultFolder);
            await AsyncStorage.setItem('folders', JSON.stringify(folders));
         }
         return folders;
      } catch {
         console.error('Error getting folders from local storage:');
         return [];
      }
   };

   useEffect(() => {
      const loadFolders = async () => {
         const storedFolders = await getFoldersFromLocalStorage();
         setFolders(storedFolders);
      };
      loadFolders();
   }, []);

   return (
      <Layout>
         <View style={styles.container}>
            <View style={styles.logoContainer}>
               <Image source={logo} style={styles.image} />
               <Text style={styles.logoText}>IntelliCards</Text>
            </View>
            <View style={styles.createSection}>
               <TextInput
                  label='Escriba el músculo'
                  onChangeText={setMuscleInputValue}
               />
               <View style={{ height: 20 }} />
               <TextButton color='#C6E9FB' onPress={handleCreateCard}>
                  Crear tarjeta
               </TextButton>
            </View>
            <View style={styles.folderSection}>
               {folders.map((folder, index) => (
                  <TouchableFolder
                     key={folder.name + index}
                     onPress={() => handleCardList(folder)}
                     icon={faFolder}
                  >
                     {folder.name}
                  </TouchableFolder>
               ))}
            </View>
            <View style={styles.buttonContainer}>
               <IconButton
                  icon={faPlus}
                  color='#D8B2E5'
                  onPress={() => setModalVisible(true)}
               />
            </View>
            <Modal
               animationType='slide'
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
                     <TextInput
                        label='Nombre de carpeta'
                        onChangeText={setFolderInputValue}
                     />
                     <View style={{ marginBottom: 15 }} />
                     <TextButton color='#C6E9FB' onPress={handleCreateFolder}>
                        Crear carpeta
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
   logoText: {
      fontFamily: 'Inter-Bold',
      fontSize: 32,
   },
   createSection: {
      marginVertical: 40,
   },
   folderSection: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 20,
   },
   buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   },
});

export default Home;
