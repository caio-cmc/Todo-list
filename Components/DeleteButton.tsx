import React, {useContext} from "react";
import TodoContext from "../Context/TodoContext";
import { View, Pressable, StyleSheet, Text } from "react-native";

function DeleteButton(props: { id: number; }) {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { allTasks, setAllTasks, darkMode } = context;

  const HandleClick = () => {
    const filterTasks = allTasks.filter((task) => task.id !== props.id);
    setAllTasks(filterTasks);
  }

  return(
    <View>
      <Pressable
        onPress={HandleClick}
        style={[ styles.button, { backgroundColor: darkMode ? '#2E073F' : '#16423C' } ]}
      >
        <Text style={styles.text}>Apagar</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4
  },
  text: {
    color: '#E9EFEC'
  }
});

export default DeleteButton;