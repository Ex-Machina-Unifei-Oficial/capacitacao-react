import { useEffect, useState } from "react";

export function MeuComponente() {
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");

  useEffect(
    () => {
      // Código a ser executado após a renderização
      console.log("O item1 ou o item2 foi alterado");

      return () => {
        // Código de limpeza do efeito
      };
    },
    [item1, item2] /* Array de dependências */
  );

  return (
    <div>
      <h1>
        Meu Componente - {item1}, {item2}
      </h1>
      <button onClick={() => setItem1("Qualquer coisa")}>Alterar item 1</button>
      <button onClick={() => setItem1("Outra coisa")}>Alterar item 1</button>
      <button onClick={() => setItem2("Terceira coisa")}>Alterar item 2</button>
    </div>
  );
}
