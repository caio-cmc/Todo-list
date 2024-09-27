import React, {useContext} from "react";
import TodoContext from "../Context/TodoContext";
import Task from "./Task";
import { Text, View, StyleSheet } from "react-native";

function TaskList() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { filteredTasks, darkMode } = context;

  return(
    <View style={ styles.container }>
      <Text style={[ styles.text, {color: darkMode ? 'white' : 'black'} ]}>Suas tarefas</Text>
      { filteredTasks.length <= 1 ? (
        <Text style={[ styles.text, {color: darkMode ? 'white' : 'black'} ]}> Você ainda não tem tarefas!</Text>
      ) : filteredTasks.map(({ id, task, description, completed }) => (
        <Task
          key={ id }
          id={ id }
          task={ task }
          description={ description }
          completed={ completed }
        />
      ))
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20
  }
});

export default TaskList;