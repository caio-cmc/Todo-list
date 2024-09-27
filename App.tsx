import TodoProvider from './Context/TodoProvider';
import MainApp from './Pages/MainApp';


export default function App() {
  return (
    <TodoProvider>
      <MainApp />
    </TodoProvider>
  );
}
