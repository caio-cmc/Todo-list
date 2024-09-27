import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import TodoContext from '../Context/TodoContext';
import TaskInput from '../Components/TaskInput';
import TasksList from '../Components/TasksList';
import FilterDrop from '../Components/FilterDrop';
import DarkMdButton from '../Components/DarkMdButton';
import ProgressBar from '../Components/ProgressBar';

export default function MainApp() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context error");
  }
  const { darkMode } = context;
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: darkMode ? '#1A1A1A' : '#E9EFEC' }]}>
      <View style={[styles.header, { backgroundColor: darkMode ? '#2E073F' : '#16423C' }]}>
        <Text style={styles.title}>To-do list</Text>
        <DarkMdButton />
      </View>
      <ScrollView
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.container}>
          <TaskInput />
          <FilterDrop />
          <TasksList />
          <StatusBar style='light'/>
        </View>
      </ScrollView>
      <ProgressBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 100,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 50,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    color: '#E9EFEC'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scroll: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 100,
    width: '100%',
  },
});
