import React, {useContext, useEffect} from "react";
import TodoContext from "../Context/TodoContext";
import { View, Pressable, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DarkMdButton() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { darkMode, setDarkMode } = context;

  const HandleClick = async () => {
    try {
      const currMode = !darkMode;
      setDarkMode(currMode);
      await AsyncStorage.setItem('darkMode', JSON.stringify(currMode));
    } catch (e) {
      console.log('Erro ao salvar o darkMode no AsyncStorage', e);
    }
  }

  useEffect(() => {
    const loadDarkMode = async () => {
      try {
        const savedMode = await AsyncStorage.getItem('darkMode');
        if (savedMode !== null) {
          setDarkMode(JSON.parse(savedMode));
        }
      } catch (e) {
        console.log('Erro ao carregar o darkMode do AsyncStorage', e);
      }
    };
    loadDarkMode();
  }, []);

  return(
    <View>
      <Pressable
        onPress={HandleClick}
      >
        <Image
          style={styles.grape}
          source={ darkMode ? require('../assets/green-grape.png') : require('../assets/grape.png')}
        />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  grape: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DarkMdButton;