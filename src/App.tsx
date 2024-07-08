// Componente App, por padrão o componente raiz do projeto

import "./App.css";

import { Mao } from "./components/Hooks/useReducer";

function App() {
  return (
    <div className="App">
      <p>Usando App</p>
      <Mao />
    </div>
  );
}

export default App;
