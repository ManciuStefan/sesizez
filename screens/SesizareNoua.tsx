import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function SesizareNoua({ navigation }: RootTabScreenProps<'TabOne'>) {
  const checkLocalStorage = async () => {
    // get all required fields from local storage and show modal if not set
    const localStorageArr = await AsyncStorage.multiGet(['nume', 'prenume', 'adresaLinie1', 'localitate', 'judet']);
    // if any of those are empty strings or null, show modal
    if (localStorageArr.some(([key, value]) => value === null || value === '')) {
      navigation.navigate('Date Personale');
    }
    
  }

  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sesizare Noua</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
