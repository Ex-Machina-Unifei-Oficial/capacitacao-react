import { createContext, PropsWithChildren, useContext } from "react";

// Criando um contexto para armazenar informações da UNIFEI
const UNIFEIContext = createContext({ nome: "", localizacao: "" });

// Componente que fornece informações da UNIFEI via contexto
function UNIFEIProvider(props: PropsWithChildren) {
  const unifeiData = {
    nome: "Universidade Federal de Itajubá",
    localizacao: "Itajubá, MG",
  };

  return (
    <UNIFEIContext.Provider value={unifeiData}>
      {props.children}
    </UNIFEIContext.Provider>
  );
}

// Componente que consome informações da UNIFEI via useContext
function UNIFEIInfo() {
  const unifei = useContext(UNIFEIContext);

  return (
    <div>
      <h2>{unifei.nome}</h2>
      <p>Localização: {unifei.localizacao}</p>
    </div>
  );
}

// Uso dos componentes
export function MeuComponente() {
  return (
    // É necessário que o Provider seja pai do componente que utiliza as informações
    <UNIFEIProvider>
      <div>
        <h1>Informações da UNIFEI</h1>
        <UNIFEIInfo />
      </div>
    </UNIFEIProvider>
  );
}
