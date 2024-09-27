import React, { useContext } from "react";
import TodoContext, { AllTasks } from '../Context/TodoContext';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { Text, View, StyleSheet } from "react-native";

function Task(props: AllTasks) {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { allTasks, setAllTasks, darkMode } = context;
  const { id, task, description, completed } = props;

  const handleClick = () => {
    const index = allTasks.findIndex((task) => task.id === id);
    const tasksMock = [...allTasks];
    tasksMock[index].completed = !completed;
    setAllTasks(tasksMock);
  }

  const inconpleteTask = darkMode ? 'white' : 'black';

  return(
    <View style={ styles.container }>
      { id > 0 && (
        <>
          <BouncyCheckbox
            onPress={handleClick}
            isChecked={completed}
            fillColor={ darkMode ? '#AD49E1' : '#16423C' }
          />
          <View style={ styles.tasksContainer }>
            <Text style={[ styles.txtTask, { color: completed ? '#00b140' : inconpleteTask} ]}>
              {task}
            </Text>
            <Text style={[ styles.txtDesc, { color: completed ? '#00b140' : inconpleteTask } ]}>
              {description}
            </Text>
          </View>
          <View style={ styles.buttonsContainer }>
            <DeleteButton 
              id= { id }
            />
            <EditButton 
              id= { id }
            />
          </View>
        </>
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 5,
  },
  tasksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
  txtTask: {
    fontSize: 14,
  },
  txtDesc: {
    fontSize: 12
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Task;