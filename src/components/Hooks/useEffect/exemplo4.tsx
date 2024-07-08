import { useEffect, useState } from "react";

const MeuComponente1 = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Intervalo executado");
    }, 3000);

    // Função de limpeza
    return () => {
      clearInterval(timer);
      console.log("Intervalo limpo");
    };
  }, []);

  return <h1>Meu componente 1 renderizado</h1>;
};

const MeuComponente2 = () => {
  return <h1>Meu componente 2 renderizado</h1>;
};

export function MeuComponente() {
  const [comp, setComp] = useState(1);

  return (
    <div>
      <button onClick={() => setComp((comp) => (comp === 1 ? 2 : 1))}>
        Toggle Comp
      </button>
      {comp === 1 ? <MeuComponente1 /> : <MeuComponente2 />}
    </div>
  );
}
