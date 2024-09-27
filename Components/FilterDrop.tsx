import React, {useContext, useEffect} from "react";
import TodoContext from "../Context/TodoContext";
import RNPickerSelect from 'react-native-picker-select';
import { Text, View, StyleSheet } from "react-native";

function FilterDrop() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { allTasks, dropdownFilter, setDropdownFilter, setFilteredTasks, darkMode } = context

  const optColor = darkMode ? 'white' : 'black';

  const options = [
    { label: 'Todas', value: 'all' },
    { label: 'Completas', value: 'complete' },
    { label: 'Incompletas', value: 'incomplete' },
  ];

  useEffect(() => {
    const emptyTask = allTasks[0];
    const completeTasks = allTasks.filter((task) => task.completed === true);
    const incompleteTasks = allTasks.filter((task) => task.completed === false);
    if (dropdownFilter === "all") {
      setFilteredTasks(allTasks);
    } else if (dropdownFilter === "complete") {
      setFilteredTasks([emptyTask, ...completeTasks]);
    } else if (dropdownFilter === "incomplete") {
      setFilteredTasks(incompleteTasks);
    }
    
  }, [dropdownFilter, allTasks]);

  return(
    <View style={ styles.container }>
      <Text style={ {color: darkMode ? 'white' : 'black'} }>Filtre:</Text>
      <View style={ styles.dropdown }>
        <RNPickerSelect 
          onValueChange={(value) => setDropdownFilter(value)}
          items={options}
          value={dropdownFilter}
          style={{
            inputAndroid: {
              color: optColor,
            },
            inputIOS: {
              color: optColor,
            }
          }}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  dropdown: {
    width: 180
  }
});

export default FilterDrop;