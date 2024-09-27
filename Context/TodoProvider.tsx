import React, { useState, useEffect } from "react";
import TodoContext, { AllTasks } from "./TodoContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

function TodoProvider({ children }: any) {
  const [allTasks, setAllTasks] = useState<AllTasks[]>([{
    id: 0, 
    task: "",
    description: "",
    completed: false
  }]);
  const [dropdownFilter, setDropdownFilter] = useState<string>("all");
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [filteredTasks, setFilteredTasks] = useState<AllTasks[]>([{
    id: 0, 
    task: "",
    description: "",
    completed: false
  }]);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [progColor, setProgColor] = useState<string>("#C40C0C");

  
  useEffect(() => {
    const fetchTasksFromStorage = async () => {
      try {
        const savedTasks = await AsyncStorage.getItem("allTasks");
        if (savedTasks !== null) {
          setAllTasks(JSON.parse(savedTasks));
        }
      } catch (e) {
        console.error("Erro ao buscar tarefas do AsyncStorage:", e);
      }
    };
    fetchTasksFromStorage();
  }, []);

  useEffect(() => {
    const saveTasksToStorage = async () => {
      try {
        await AsyncStorage.setItem("allTasks", JSON.stringify(allTasks));
      } catch (e) {
        console.error("Erro ao salvar tarefas no AsyncStorage:", e);
      }
    };
    const completedTasks = allTasks.filter((task) => task.completed === true).length;
    if (completedTasks > 0) {
      const currProg = (100 * completedTasks) / (allTasks.length - 1);
      setProgress(Number(currProg.toFixed(1)));
    } else {
      setProgress(0);
    }
    saveTasksToStorage();
  }, [allTasks]);

  const todoValue = {
    dropdownFilter,
    setDropdownFilter,
    task,
    setTask,
    description,
    setDescription,
    allTasks,
    setAllTasks,
    filteredTasks,
    setFilteredTasks,
    darkMode,
    setDarkMode,
    progress,
    setProgress,
    progColor,
    setProgColor
  }

  return (
    <TodoContext.Provider value={ todoValue }>
      { children }
    </TodoContext.Provider>
  )
};

export default TodoProvider;