import React, {useContext} from "react";
import TodoContext from "../Context/TodoContext";
import { View, Pressable, StyleSheet, Text, Alert } from "react-native";

function EditButton(props: { id: number; }) {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { allTasks, setAllTasks, task, setTask, description, setDescription, darkMode } = context;

  const HandleClick = () => {
    const filterTasks = allTasks.filter((task) => task.id !== props.id);
    const taskToEdit = allTasks.filter((task) => task.id === props.id);
    if (task !== "" || description !== "") {
      Alert.alert('Atenção!', 'Você já tem uma nova tarefa em andamento! Finalize-a antes de editar')
    } else {
      setAllTasks(filterTasks);
      setTask(taskToEdit[0].task);
      setDescription(taskToEdit[0].description);
    }
  }

  return(
    <View>
      <Pressable
        onPress={HandleClick}
        style={[ styles.button, { backgroundColor: darkMode ? '#2E073F' : '#16423C' } ]}
      >
        <Text style={ styles.text }>Editar</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#E9EFEC'
  }
});

export default EditButton;