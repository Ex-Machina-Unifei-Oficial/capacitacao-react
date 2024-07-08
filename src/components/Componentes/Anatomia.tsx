// import React from "react"
import { useState } from "react";

// definição do tipo das props -> mais aprofundadas na próxima seção
// vem antes da definição do componente, mas geralmente é escrito depois
type MyComponentProps = {
  prop1: number;
  prop2: string;
};

// definição do componente (utilizando arrow function nesse caso)
// os nomes geralmente utilizam PascalCase (palavras iniciam com maiúscula, inclusive a primeira)
export const MyComponent = ({ prop1, prop2 }: MyComponentProps) => {
  // corpo do componente
  // onde ficam os hooks e as funções internas do componente

  // hook useState -> mais aprofundado nas próximas seções
  const [state, setState] = useState(prop1);
  // restante dos Hooks...

  // função interna do componente para executar ao clicar no botão
  // sim, eu gosto de arrow functions, mas não são obrigatórias
  const handleButtonClick = () => {
    setState((prevState) => prevState + 1);
  };

  // também poderia ser definida da seguinte forma:
  //function handleButtonClick() {
  //    setState(prevState => prevState + 1)
  //}
  // restante das funções internas...

  // retorno do componente
  // contém os elementos "HTML" a serem renderizados no navegador
  return (
    <div>
      {/*
                comemtários dentro do JSX devem ser feitos dessa forma
                as chaves indicam o uso de "JavaScript tradicional" dentro do jsx
                barra asterisco indicam comentário em JS, igual C ou C++
            */}
      <h1>prop1: {prop1}</h1>
      <h1>prop2: {prop2}</h1>
      <p>state: {state}</p>
      <button onClick={handleButtonClick}>Incrementar state</button>
    </div>
  );
};

// Dentro de outro componente ele seria chamado da seguinte forma:
// <MyComponent prop1={10} prop2="texto generico"/>
// Exemplo mais concreto na próxima seção

// Sintaxe reduzida:

// type MyComponentProps = {
//   prop1: number;
//   prop2: string;
// };

// export const MyComponent = (
//   { prop1, prop2 }: MyComponentProps // omissão do return em arrow functions
// ) => (
//   <div>
//     <h1>prop1: {prop1}</h1>
//     <h1>prop2: {prop2}</h1>
//   </div>
// );
