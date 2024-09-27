import { createContext, Dispatch, SetStateAction } from "react";

export interface AllTasks {
  id: number;
  task: string;
  description: string;
  completed: boolean;
}

interface TodoTypes {
  dropdownFilter: string;
  setDropdownFilter: Dispatch<SetStateAction<string>>;
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  allTasks: AllTasks[];
  setAllTasks: Dispatch<SetStateAction<AllTasks[]>>;
  filteredTasks: AllTasks[];
  setFilteredTasks: Dispatch<SetStateAction<AllTasks[]>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
  progColor: string;
  setProgColor: Dispatch<SetStateAction<string>>;
}

const TodoContext = createContext<TodoTypes | undefined>(undefined);

export default TodoContext;