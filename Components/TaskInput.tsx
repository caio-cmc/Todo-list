import React, {useContext} from "react";
import TodoContext, { AllTasks } from "../Context/TodoContext";
import { Text, View, TextInput, Pressable, StyleSheet } from "react-native";

function TaskInput() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { task, setTask, description, setDescription, allTasks, setAllTasks, darkMode } = context;

  const handleClick = () => {
    const lastTask = allTasks[allTasks.length - 1];
    const currTask: AllTasks = {
      id: lastTask.id + 1,
      task: task,
      description: description,
      completed: false
    }
    const updtTasks: AllTasks[] = [...allTasks, currTask];
    setAllTasks(updtTasks);
    setTask("");
    setDescription("");
  }

  return(
    <View style={styles.container}>
      <Text 
        style={ {color: darkMode ? 'white' : 'black'} }
      >
        Adicionar tarefa:
      </Text>
      <View style={styles.allInputs}>
        <View style={styles.textInputs}>
          <TextInput 
            placeholder="Nova tarefa"
            placeholderTextColor={'#fff'}
            value={ task }
            onChangeText={(event) => setTask(event)}
            style={[ styles.txtInput, { backgroundColor: darkMode ? 'grey' : '#6A9C89' } ]}
          />
          <TextInput 
            placeholder="Descrição"
            placeholderTextColor={'#fff'}
            value={ description }
            onChangeText={(event) => setDescription(event)}
            style={[ styles.txtInput, { backgroundColor: darkMode ? 'grey' : '#6A9C89' } ]}
          />
        </View>
        <Pressable
          onPress={handleClick}
          disabled={ task ? false : true }
          style={[ styles.button, { backgroundColor: task ? (darkMode ? '#2E073F' : '#16423C')  : 'grey' } ]}
        >
          <Text style={ styles.buttonText }>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  allInputs: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInputs: {
    display: 'flex',
    flexDirection: 'column'
  },
  txtInput: {
    backgroundColor: 'red',
    width: 200,
    height: 50,
    margin: 5,
    borderRadius: 10,
    padding: 10
  },
  button: {
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#E9EFEC',
    fontSize: 50
  }
});

export default TaskInput;